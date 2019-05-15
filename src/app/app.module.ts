import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap'; // Paquete Bootstrap
import {NgbdModalBasic} from './modal-example'; // Implementacion de Modal Popup

@NgModule({
  declarations: [
    AppComponent,
    NgbdModalBasic
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot() // Implementacion de Modal Popup
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
