import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './components/titulo/titulo.component';
import { Titulo2Component } from './components/titulo2/titulo2.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { HeaderComponent } from './components/header/header.component';



import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
//npm install @ngx-translate/core @ngx-translate/http-loader --save
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    Titulo2Component,
    AlumnosComponent,
    AlumnoComponent,
    HeaderComponent
  ],
  imports: [
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
    })
  ],
  providers: [],
  bootstrap: [AppComponent,TituloComponent]
})
export class AppModule { }
