import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

getAlumnos(){
	return[{
		nombre:"Juan",
		paterno:"Velez",
		materno:"Ballesteros",
		matricula: 1
	},{
		nombre:"Pedro",
		paterno:"Ramirez",
		materno:"Suarez",
		matricula: 2
	},{
		nombre:"Diana",
		paterno:"Lopez",
		materno:"Perez",
		matricula: 3
	}

	];
}

}
