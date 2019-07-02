import { Component, OnInit } from '@angular/core';
import { Alumno} from '../../models/Alumnos';

import {Router, ActivatedRoute} from '@angular/router';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
   alumno:Alumno
   submitted = false;

  carreras =["ITC","LAE","IIS","LEC"];

  constructor( private router: Router ) { 
    this.alumno = new Alumno();

  	//this.alumno = new Alumno('1','nombre','mat','pat','ITC');

  }

  ngOnInit() {
  }

  get aJson() { return JSON.stringify(this.alumno); }


  enviar(){
    this.submitted = !this.submitted;
   //this.router.navigate(['alumnoRegister',this.alumno]);
    console.log(this.alumno);
  }

}
