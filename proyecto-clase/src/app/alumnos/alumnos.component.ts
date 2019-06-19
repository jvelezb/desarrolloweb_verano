import { Component, OnInit } from '@angular/core';
import {AlumnosService}  from '../services/alumnos.service';
@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  providers: [AlumnosService]
})
export class AlumnosComponent implements OnInit {
	 alumnos;

  constructor(alumnosService: AlumnosService) {
 
  	this.alumnos= alumnosService.getAlumnos();
  }

  ngOnInit() {
  }

}
