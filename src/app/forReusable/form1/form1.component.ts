import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormType, ReusableFormType } from 'src/app/core/app.types';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.scss']
})
export class Form1Component implements OnInit {

  regForm!: FormGroup;
  getData!: ReusableFormType;
  submitted = false;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      address: ['']
    });
  }
  get fc(){
    return this.regForm.controls;
  }
  onSubmit(value:ReusableFormType){
    this.submitted = true;
    if(this.regForm.valid){
      this.getData = value;
    } else {
      this.regForm.markAllAsTouched();
    }
  }

}
