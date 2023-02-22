import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReactformComponent } from './reactform/reactform.component';
import { TemplComponent } from './templ/templ.component';
import{FormsModule,ReactiveFormsModule}from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReactformComponent,
    TemplComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
