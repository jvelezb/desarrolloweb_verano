import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { Titulo2Component } from './components/titulo2/titulo2.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListadoAlumnosComponent } from './components/listado-alumnos/listado-alumnos.component';
import { AlumnoDetailComponent } from './components/alumno-detail/alumno-detail.component';
import { FormsModule }   from '@angular/forms';
import { ProfesorComponent } from './components/profesor/profesor.component';




import { Routes, RouterModule } from '@angular/router';


//translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//npm install @ngx-translate/core @ngx-translate/http-loader --save



import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



const routes: Routes = [
    {
        path: '',
        component: AlumnosComponent
    },
    {
        path: 'listaAlumnos',
        component: ListadoAlumnosComponent
    },
     {
        path: 'formulario',
        component: FormularioComponent
    }
    ,
    {
        path: 'alumnoDetails/:id',
        component: AlumnoDetailComponent

    },
     {
        path: 'alumnoRegister',
        component: AlumnoDetailComponent,
        data : {alumno : 'some value'}

    }, {
        path: 'hola',
        component: FormularioComponent
    }, {
        path: 'admin/profesor',
        component: ProfesorComponent
    }

];


@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    Titulo2Component,
    AlumnosComponent,
    AlumnoComponent,
    HeaderComponent,
    FormularioComponent,
    ListadoAlumnosComponent,
    AlumnoDetailComponent,
    ProfesorComponent
  ],
  imports: [
     FormsModule,
     BsDropdownModule.forRoot(),
     CarouselModule.forRoot(),
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (http: HttpClient) => {
          return new TranslateHttpLoader(http);
        },
        deps: [ HttpClient ]
      }
    }),
    BrowserAnimationsModule
  ],
  exports:[RouterModule]  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
