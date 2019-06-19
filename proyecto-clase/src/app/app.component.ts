import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  variable_chistosa = 'Practica clase web';
  variable2= "otro elemento"

  calificacion = 80;

  leDiClick($event){
  	this.variable_chistosa ="Click";
  	console.log("Click",$event);
  }
 




}
