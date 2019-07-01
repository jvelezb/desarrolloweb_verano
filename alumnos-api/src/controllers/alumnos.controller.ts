import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  getModelSchemaRef,
 
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Alumno} from '../models';
import {AlumnoRepository} from '../repositories';

export class AlumnosController {
  constructor(
    @repository(AlumnoRepository)
    public alumnoRepository : AlumnoRepository,
  ) {}

  @post('/alumnos', {
    responses: {
      '200': {
        description: 'Alumno model instance',
        content: {'application/json': {schema: {'x-ts-type': Alumno}}},
      },
    },
  })
  async create(@requestBody() alumno: Alumno): Promise<Alumno> {
    return await this.alumnoRepository.create(alumno);
  }

  @get('/alumnos/count', {
    responses: {
      '200': {
        description: 'Alumno model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Alumno)) where?: Where<Alumno>,
  ): Promise<Count> {
    return await this.alumnoRepository.count(where);
  }

  @get('/alumnos', {
    responses: {
      '200': {
        description: 'Array of Alumno model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Alumno, {includeRelations: true})},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Alumno)) filter?: Filter<Alumno>,
  ): Promise<Alumno[]> {
    return await this.alumnoRepository.find(filter);
  }

  @patch('/alumnos', {
    responses: {
      '200': {
        description: 'Alumno PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() alumno: Alumno,
    @param.query.object('where', getWhereSchemaFor(Alumno)) where?: Where<Alumno>,
  ): Promise<Count> {
    return await this.alumnoRepository.updateAll(alumno, where);
  }

@get('/alumnos/{id}', {
    responses: {
      '200': {
        description: 'Alumno model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Alumno, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Alumno> {
    return await this.alumnoRepository.findById(id);
  }

  @patch('/alumnos/{id}', {
    responses: {
      '204': {
        description: 'Alumno PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() alumno: Alumno,
  ): Promise<void> {
    await this.alumnoRepository.updateById(id, alumno);
  }

  @put('/alumnos/{id}', {
    responses: {
      '204': {
        description: 'Alumno PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() alumno: Alumno,
  ): Promise<void> {
    await this.alumnoRepository.replaceById(id, alumno);
  }

  @del('/alumnos/{id}', {
    responses: {
      '204': {
        description: 'Alumno DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.alumnoRepository.deleteById(id);
  }
}
