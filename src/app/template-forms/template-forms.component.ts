import { Component, OnInit } from '@angular/core';
import { ReactiveFormType } from '../core/app.types';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.scss']
})
export class TemplateFormsComponent implements OnInit {
  getData!: ReactiveFormType;
  firstName = '';
  lastName = '';
  email = '';
  address = '';
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(value:ReactiveFormType){
    this.getData = value;
  }
}
