// Uncomment these imports to begin using these cool features!

import {inject} from '@loopback/context';
import {get, param} from '@loopback/rest';
import {StarWarServiceService} from '../services/star-war-service.service'

export class PersonjesController {
  constructor(@inject('services.StarWarServiceService')
    protected starwarsServices: StarWarServiceService,) {}


@get('/starwars/{id}')
  async personaje(
    @param.path.string('id') id: string
  ): Promise<any> {
    //Preconditions

    return await this.starwarsServices.getCharacter(id);
  }






}
