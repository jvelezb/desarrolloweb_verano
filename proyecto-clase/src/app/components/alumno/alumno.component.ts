import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: '[alumno-app]',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {


@Input() alumno;
  constructor() { }

  ngOnInit() {
  }

}
