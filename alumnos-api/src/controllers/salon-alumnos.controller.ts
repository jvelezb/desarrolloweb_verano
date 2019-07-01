// Copyright IBM Corp. 2018. All Rights Reserved.
// Node module: @loopback/example-todo-list
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {Alumno} from '../models';
import {SalomRepository} from '../repositories';

export class SalonAlumnosController {
  constructor(
    @repository(SalomRepository) protected salomRepo: SalomRepository,
  ) {}

  @post('/salon/{id}/alumnos', {
    responses: {
      '200': {
        description: 'Salon alumnos model instance',
        content: {'application/json': {schema: {'x-ts-type': Alumno}}},
      },
    },
  })
  async create(
    @param.path.number('id') id: number,
    @requestBody() alumno: Alumno,
  ): Promise<Alumno> {
    return await this.salomRepo.alumnos(id).create(alumno);
  }

  @get('/salon/{id}/salon', {
    responses: {
      '200': {
        description: "lista de alumnos del salon",
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Alumno}},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Alumno>,
  ): Promise<Alumno[]> {
    return await this.salomRepo.alumnos(id).find(filter);
  }

  @patch('/salon/{id}/alumnos', {
    responses: {
      '200': {
        description: 'los alumnos del salon PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody() alumno: Partial<Alumno>,
    @param.query.object('where', getWhereSchemaFor(Alumno)) where?: Where<Alumno>,
  ): Promise<Count> {
    return await this.salomRepo.alumnos(id).patch(alumno, where);
  }

  @del('/salom/{id}/alumnos', {
    responses: {
      '200': {
        description: 'DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Alumno)) where?: Where<Alumno>,
  ): Promise<Count> {
    return await this.salomRepo.alumnos(id).delete(where);
  }
}
