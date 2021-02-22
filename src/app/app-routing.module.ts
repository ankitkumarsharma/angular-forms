import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Form1Component } from './forReusable/form1/form1.component';
import { Form2Component } from './forReusable/form2/form2.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';

const routes: Routes = [
  {path:'', pathMatch:'full',redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'reactive-forms', component: ReactiveFormsComponent},
  {path:'form1', component: Form1Component},
  {path:'form2', component: Form2Component},
  {path:'template-forms', component: TemplateFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
