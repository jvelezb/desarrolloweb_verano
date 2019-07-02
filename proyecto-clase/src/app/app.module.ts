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



import { HttpClient, HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';


import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor   } from './helpers/error.interceptor'
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
    {
        path: '',
        component: AlumnosComponent,
        canActivate: [AuthGuard]
    },
     {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'listaAlumnos',
        component: ListadoAlumnosComponent,
         canActivate: [AuthGuard]
    },
     {
        path: 'formulario',
        component: FormularioComponent,
         canActivate: [AuthGuard]
    }
    ,
    {
        path: 'alumnoDetails/:id',
        component: AlumnoDetailComponent,
         canActivate: [AuthGuard]

    },
     {
        path: 'alumnoRegister',
        component: AlumnoDetailComponent,
        data : {alumno : 'some value'},
         canActivate: [AuthGuard]

    }, {
        path: 'hola',
        component: FormularioComponent,
         canActivate: [AuthGuard]
    }, {
        path: 'admin/profesor',
        component: ProfesorComponent,
         canActivate: [AuthGuard]
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
    ProfesorComponent,
    LoginComponent
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
  providers: [ 
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
