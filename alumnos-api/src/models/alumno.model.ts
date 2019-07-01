
import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Salom, SalomWithRelations} from './salom.model';


@model({settings: {}})
export class Alumno extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  paterno: string;

   @property({
    type: 'string',
    required: true,
  })
  materno: string;

  @property({
    type: 'string',
    id: true,
    required: true,
  })
  matricula: string;

  @belongsTo(() => Salom)
  salomId: number;






  constructor(data?: Partial<Alumno>) {
    super(data);
  }
}

export interface AlumnoRelations {
 salon?: SalomWithRelations;
}

export type AlumnoWithRelations = Alumno & AlumnoRelations;
