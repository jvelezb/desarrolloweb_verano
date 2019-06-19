import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

getAlumnos(){
	return[{
		nombre:"alumno1",
		matricula: 1
	},{
		nombre:"alumno2",
		matricula: 2
	},{
		nombre:"alumno3",
		matricula: 3
	}

	];
}

}
