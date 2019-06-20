import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {AlumnosService}  from '../../services/alumnos.service';


import { FormsModule }   from '@angular/forms';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  providers: [AlumnosService]
})
export class AlumnosComponent implements OnInit {
	 alumnos;
   @Output() clicked=new EventEmitter<string>(); 
   

  constructor(alumnosService: AlumnosService) {
     
  	this.alumnos= alumnosService.getAlumnos();
   


  }

  ngOnInit() {
  }

}
