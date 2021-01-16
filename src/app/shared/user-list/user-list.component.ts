import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { USER_LIST } from 'src/app/core/app.constant';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  @Input() controlName!:string;
  @Input() isRequired!:boolean;
  userList = USER_LIST;
  userListControl: FormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    if(!this.controlName){
      this.controlName = 'userListControl';
      this.parentForm.addControl(this.controlName, this.userListControl)
      if(this.isRequired){
        this.parentForm.controls[this.controlName].setValidators([
          Validators.required
        ]);
      }
    } else {
      this.parentForm.addControl(this.controlName, this.userListControl);
      if(this.isRequired){
        this.parentForm.controls[this.controlName].setValidators([
          Validators.required
        ]);
      }
    }
  }
  get fc(){
    return this.parentForm.get(this.controlName)?.invalid && this.parentForm.get(this.controlName)?.touched;
  }
}
