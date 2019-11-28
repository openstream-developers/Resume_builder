import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Template1Component } from './template1/template1.component';
import { MaincompComponent } from './maincomp/maincomp.component';

@NgModule({
  declarations: [
    AppComponent,
    Template1Component,
    MaincompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
