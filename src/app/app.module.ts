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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { AksConfirmDialogComponent } from './shared/dialog/aks-confirm-dialog/aks-confirm-dialog.component';
import { AksFormDialogComponent } from './shared/dialog/aks-form-dialog/aks-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HomeComponent,
    ReactiveFormsComponent,
    TemplateFormsComponent,
    UserListComponent,
    Form1Component,
    Form2Component,
    AksConfirmDialogComponent,
    AksFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
