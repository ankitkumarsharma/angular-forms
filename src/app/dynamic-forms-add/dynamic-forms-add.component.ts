import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DYNAMIC_FORMS_DROPDOWN_LIST } from '../core/app.constant';
import { DynamicFormArrType } from '../core/app.types';

@Component({
  selector: 'app-dynamic-forms-add',
  templateUrl: './dynamic-forms-add.component.html',
  styleUrls: ['./dynamic-forms-add.component.scss']
})
export class DynamicFormsAddComponent implements OnInit {
  addForm!:FormGroup;
  submitted!:boolean;
  readonly dropdownFormsList = DYNAMIC_FORMS_DROPDOWN_LIST;
  dynamicForm!:FormGroup;
  dynamicFormArr:DynamicFormArrType[] = [];
  dropdownOption_flag!:boolean;
  dynamicFormData:any;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.addFormFn();
    this.addDynamicForm();
  }
  addFormFn(){
    this.addForm = this._fb.group({
      label: ['', Validators.required],
      control: ['', Validators.required],
      dropdownData: ['']
    });
  }
  get fc(){
    return this.addForm.controls;
  }
  onAddControl(){
    this.submitted = true;
    if(this.addForm.valid){
      this.dynamicFormArr = [...this.dynamicFormArr, this.addForm.value]
    } else {
      this.addForm.markAllAsTouched();
    }
    this.addDynamicForm(); 
    this.addFormResetFn();
  }
  addFormResetFn(){
    this.addForm.reset();
    this.submitted = false;
    this.addForm.patchValue({
      label: '',
      control: '',
    });
  }
  onSubmitForm(){
    this.dynamicFormData = this.dynamicForm.value;
  }
  addDynamicForm(){
    this.dynamicForm = this._fb.group({});
    this.dynamicFormArr.forEach((item)=>{
      this.dynamicForm.addControl(item['label'], this._fb.control("",[]))
    });
  }
  onControlChange(e:any){
    if(e.value == 4){
      this.dropdownOption_flag = true;
      this.addForm.controls['dropdownData'].setValidators([Validators.required])
    } else {
      this.dropdownOption_flag = false;
      this.addForm.controls['dropdownData'].clearValidators();
    }
    this.addForm.controls['dropdownData'].updateValueAndValidity()
  }
}
