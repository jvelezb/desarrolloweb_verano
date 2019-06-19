import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
//npm install @ngx-translate/core @ngx-translate/http-loader --save



@Component({
  selector: 'titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss']
})
export class TituloComponent implements OnInit {

  	public activeLang = 'es';


  	calificacion = 80;

	constructor( private translate: TranslateService){
    	this.translate.setDefaultLang(this.activeLang);
  	}



	leDiClick($event){
	  	
	  	this.calificacion= Math.round(Math.random()*100);
	 
	  	console.log("Click",$event);
	}

	public cambiarLenguaje(lang) {
    	this.activeLang = lang;
    	this.translate.use(lang);
  	}

  


	ngOnInit() {}

}
