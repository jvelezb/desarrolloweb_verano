import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './mongo-conn.datasource.json';

export class MongoConnDataSource extends juggler.DataSource {
  static dataSourceName = 'mongo_conn';

  constructor(
    @inject('datasources.config.mongo_conn', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
