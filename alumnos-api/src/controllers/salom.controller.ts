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
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Salom} from '../models';
import {SalomRepository} from '../repositories';

export class SalomController {
  constructor(
    @repository(SalomRepository)
    public salomRepository : SalomRepository,
  ) {}

  @post('/salon', {
    responses: {
      '200': {
        description: 'Salom model instance',
        content: {'application/json': {schema: {'x-ts-type': Salom}}},
      },
    },
  })
  async create(@requestBody() salom: Salom): Promise<Salom> {
    return await this.salomRepository.create(salom);
  }

  @get('/salon/count', {
    responses: {
      '200': {
        description: 'Salom model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Salom)) where?: Where<Salom>,
  ): Promise<Count> {
    return await this.salomRepository.count(where);
  }

  @get('/salon', {
    responses: {
      '200': {
        description: 'Array of Salom model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Salom}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Salom)) filter?: Filter<Salom>,
  ): Promise<Salom[]> {
    return await this.salomRepository.find(filter);
  }

  @patch('/salon', {
    responses: {
      '200': {
        description: 'Salom PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() salom: Salom,
    @param.query.object('where', getWhereSchemaFor(Salom)) where?: Where<Salom>,
  ): Promise<Count> {
    return await this.salomRepository.updateAll(salom, where);
  }

  @get('/salon/{id}', {
    responses: {
      '200': {
        description: 'Salom model instance',
        content: {'application/json': {schema: {'x-ts-type': Salom}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Salom> {
    return await this.salomRepository.findById(id);
  }

  @patch('/salon/{id}', {
    responses: {
      '204': {
        description: 'Salom PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() salom: Salom,
  ): Promise<void> {
    await this.salomRepository.updateById(id, salom);
  }

  @put('/salon/{id}', {
    responses: {
      '204': {
        description: 'Salom PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() salom: Salom,
  ): Promise<void> {
    await this.salomRepository.replaceById(id, salom);
  }

  @del('/salon/{id}', {
    responses: {
      '204': {
        description: 'Salom DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.salomRepository.deleteById(id);
  }
}
