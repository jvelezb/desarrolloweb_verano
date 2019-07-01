

import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  Filter,
  HasManyRepositoryFactory,
  HasOneRepositoryFactory,
  Options,
  repository,
} from '@loopback/repository';
import {
  Alumno,
  Salom,
  SalomRelations,
  SalomWithRelations,
} from '../models';
import {AlumnoRepository} from './alumno.repository';
import {MongoConnDataSource} from '../datasources';

export class SalomRepository extends DefaultCrudRepository<
  Salom,
  typeof Salom.prototype.id,
  SalomRelations
> {
  public readonly alumnos: HasManyRepositoryFactory<
    Alumno,
    typeof Salom.prototype.id
  >;
  

  constructor(
    @inject('datasources.mongo_conn') dataSource: MongoConnDataSource,
    @repository.getter('AlumnoRepository')
    protected alumnoRepositoryGetter: Getter<AlumnoRepository>,
  
  ) {
    super(Salom, dataSource);
    this.alumnos = this.createHasManyRepositoryFactoryFor(
      'alumnos',
      alumnoRepositoryGetter,
    );
   
  }

  public findByProfesor(profesor: string) {
    return this.findOne({where: {profesor}});
  }

  async find(
    filter?: Filter<Salom>,
    options?: Options,
  ): Promise<SalomWithRelations[]> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = {...filter, include: undefined};
    const result = await super.find(filter, options);

   

    if (include && include.length && include[0].relation === 'alumnos') {
      await Promise.all(
        result.map(async r => {
          r.alumnos = await this.alumnos(r.id).find();
        }),
      );
    }

    return result;
  }

  async findById(
    id: typeof Salom.prototype.id,
    filter?: Filter<Salom>,
    options?: Options,
  ): Promise<SalomWithRelations> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = {...filter, include: undefined};

    const result = await super.findById(id, filter, options);

    
    if (include && include.length && include[0].relation === 'alumnos') {
      result.alumnos = await this.alumnos(result.id).find();
    }

    return result;
  }
}
