import {Component, Input} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TituloComponent } from './components/titulo/titulo.component';
import { Titulo2Component } from './components/titulo2/titulo2.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

import { HeaderComponent } from './components/header/header.component';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models';


import { AuthGuard } from './guards/auth.guard';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	    currentUser: User;

	 constructor(
       
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
  	




}
