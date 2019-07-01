import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './rest-star-wars.datasource.json';

export class RestStarWarsDataSource extends juggler.DataSource {
  static dataSourceName = 'restStarWars';

  constructor(
    @inject('datasources.config.restStarWars', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
