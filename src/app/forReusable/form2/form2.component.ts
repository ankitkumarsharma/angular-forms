import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReusableFormType } from 'src/app/core/app.types';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.scss']
})
export class Form2Component implements OnInit {

  regForm!: FormGroup;
  getData!: any;
  submitted = false;
  list2Value = 'ankit';
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
  onSubmit(value:any){
    this.submitted = true;
    if(this.regForm.valid){
      this.getData = value;
    } else {
      this.regForm.markAllAsTouched();
    }
  }

}
