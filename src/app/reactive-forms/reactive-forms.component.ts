import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReactiveFormType } from '../core/app.types';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  regForm!: FormGroup;
  getData!: ReactiveFormType;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      address: ['']
    });
  }
  onSubmit(value:ReactiveFormType){
    this.getData = value;
  }

}
