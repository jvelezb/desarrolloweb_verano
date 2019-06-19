import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss']
})
export class AlumnoComponent implements OnInit {
	@Input() data;
  constructor() { }

  ngOnInit() {
  }

}
