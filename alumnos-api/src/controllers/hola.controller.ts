// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import {get} from '@loopback/rest';

export class HolaController {
  constructor() {}


  @get('/saludos')
  saludos() : string {
  	return 'Saludos a la banda';
  }
}
