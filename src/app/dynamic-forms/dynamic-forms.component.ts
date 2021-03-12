import { FormGroup, FormBuilder } from '@angular/forms';
import { DYNAMIC_FORMS } from './../core/app.constant';
import { Component, OnInit } from '@angular/core';
import { DynamicFormsType } from '../core/app.types';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {
  dynamicFormArr: DynamicFormsType[] = DYNAMIC_FORMS;
  dynamicForm!: FormGroup;
  formData!:DynamicFormsType;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.dynamicForm = this._fb.group({});
    this.dynamicFormArr.forEach((item,index)=>{
      this.dynamicForm.addControl(item['name'], this._fb.control("",[]))
    });
  }
  onSubmitForm(){
    this.formData = this.dynamicForm.value;
  }
  onResetForm(){
    this.dynamicForm.reset();
    Object.keys(this.dynamicForm.value).forEach((key)=>{
      this.dynamicForm.controls[key].patchValue("");
    });
  }
}
