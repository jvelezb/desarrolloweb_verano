import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AlumnosService }   from '../../services/alumnos.service';
import { ActivatedRoute, Router } from '@angular/router';


import { FormsModule }   from '@angular/forms';



@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  providers: [AlumnosService]
})
export class AlumnosComponent implements OnInit {
	 alumnos;
   //@Outpu t() clicked=new EventEmitter<string>(); 
   

  constructor(public alumnosService: AlumnosService, private route: ActivatedRoute) {
  	
   
  }

  ngOnInit() {
    this.getAlumnos();
  }


   getAlumnos() {
    this.alumnos = [];
    this.alumnosService.getAlumnos().subscribe((data: {}) => {
      console.log(data);
      this.alumnos = data;
    });
  }


   deleteAlumno($event) {
     console.log($event);
    this.alumnosService.deleteAlumnos($event)
      .subscribe(res => {
          this.getAlumnos();
        }, (err) => {
          console.log(err);
        }
      );
  }





 

}
