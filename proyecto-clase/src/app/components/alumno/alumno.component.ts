import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { AlumnosService }   from '../../services/alumnos.service';

@Component({
  selector: '[alumno-app]',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
  providers: [AlumnosService]
})
export class AlumnoComponent implements OnInit {
@Output() deleteMsg = new EventEmitter<string>();



@Input() loquesea;
  constructor(public alumnosService: AlumnosService) { }

  ngOnInit() {
  }




 delete($event) {
    this.deleteMsg.emit($event);
 
  }

}
