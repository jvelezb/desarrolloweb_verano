import {Entity, model, property} from '@loopback/repository';
import {hasMany} from '@loopback/repository';
import {Alumno,AlumnoWithRelations} from './alumno.model'; 


@model({settings: {}})
export class Salom extends Entity {
   @property({
    type: 'number',
    id:true,
    required:true
  })
  id: number;

  @property({
    type: 'string',
  })
  nombre?: string;

  @property({
    type: 'string',
  })
  profesor?: string;


@hasMany(()=> Alumno)
alumnos?:Alumno[];

  constructor(data?: Partial<Salom>) {
    super(data);
  }
}

export interface SalomRelations {
  alumnos?:AlumnoWithRelations[];
}

export type SalomWithRelations = Salom & SalomRelations;
