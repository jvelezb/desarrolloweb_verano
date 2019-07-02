import { Component, OnInit, Input } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AlumnosService } from '../../services/alumnos.service';
import {Alumno} from '../../models/Alumnos';


@Component({
  selector: 'app-alumno-detail',
  templateUrl: './alumno-detail.component.html',
  styleUrls: ['./alumno-detail.component.scss']
})
export class AlumnoDetailComponent implements OnInit {

  @Input()matricula;
  alumnos
  sub;

  constructor(private _Activatedroute:ActivatedRoute,
               private _router:Router, alumnosService:AlumnosService
               ) {

		  		this.sub=this._Activatedroute.paramMap.subscribe(params => { 
		         console.log(params);
		          this.matricula = params.get('id'); 
              this.alumnos = new Alumno();
		     	 });
		  		this.alumnos = alumnosService.getAlumnos();



  }

  ngOnInit() {
  }




}
