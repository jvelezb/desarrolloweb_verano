import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { Titulo2Component } from './titulo2/titulo2.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    Titulo2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,TituloComponent]
})
export class AppModule { }
