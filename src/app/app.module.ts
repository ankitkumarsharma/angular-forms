import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './shared/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserListComponent } from './shared/user-list/user-list.component';
import { Form1Component } from './forReusable/form1/form1.component';
import { Form2Component } from './forReusable/form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    UserListComponent,
    Form1Component,
    Form2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
