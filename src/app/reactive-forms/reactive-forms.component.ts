import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ReactiveFormType } from '../core/app.types';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {
  regForm!: FormGroup;
  getData!: ReactiveFormType;
  submitted = false;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.regForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      address: ['',[this.customValidator()]]
    });
  }
  get fc(){
    return this.regForm.controls;
  }
  customValidator(): ValidatorFn{
    return (control: AbstractControl)=>{
      if(control.value){
        return null;
      } else {
        return {errorMsg: `This is a customm validator error message`}
      }
    }
  }
  onSubmit(value:ReactiveFormType){
    this.submitted = true;
    if(this.regForm.valid){
      this.getData = value;
    } else {
      this.regForm.markAllAsTouched();
    }
  }

}
