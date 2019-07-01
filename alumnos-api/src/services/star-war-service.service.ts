import {getService} from '@loopback/service-proxy';
import {inject, Provider} from '@loopback/core';
import {RestStarWarsDataSource} from '../datasources/rest-star-wars.datasource';

export interface StarWarServiceService {
  getCharacter(personId: string): Promise<any>;
  
}


export class StarWarServiceServiceProvider implements Provider<StarWarServiceService> {
  constructor(
    // restStarWars must match the name property in the datasource json file
    @inject('datasources.restStarWars')
    protected dataSource: RestStarWarsDataSource = new RestStarWarsDataSource(),
  ) {}

  value(): Promise<StarWarServiceService> {
    return getService(this.dataSource);
  }


}
