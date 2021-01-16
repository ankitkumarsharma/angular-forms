import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { USER_LIST } from 'src/app/core/app.constant';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  @Input() parentForm!: FormGroup;
  userList = USER_LIST;
  userListControl: FormControl = new FormControl('');
  constructor() { }

  ngOnInit(): void {
    this.parentForm.addControl('userListControl', this.userListControl)
  }

}
