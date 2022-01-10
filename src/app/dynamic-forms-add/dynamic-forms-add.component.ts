import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DYNAMIC_FORMS_DROPDOWN_LIST } from '../core/app.constant';

@Component({
  selector: 'app-dynamic-forms-add',
  templateUrl: './dynamic-forms-add.component.html',
  styleUrls: ['./dynamic-forms-add.component.scss']
})
export class DynamicFormsAddComponent implements OnInit {
  addForm!:FormGroup;
  submitted!:boolean;
  readonly dropdownFormsList = DYNAMIC_FORMS_DROPDOWN_LIST;
  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.addFormFn();
  }
  addFormFn(){
    this.addForm = this._fb.group({
      label: ['', Validators.required],
      control: ['', Validators.required],
    });
  }
  get fc(){
    return this.addForm.controls;
  }
  onAdd(){
    this.submitted = true;
    if(this.addForm.valid){
      //-----
    } else {
      this.addForm.markAllAsTouched();
    }
  }
}
