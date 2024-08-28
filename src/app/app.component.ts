import { Component } from '@angular/core';
//import { NgFor, NgIf } from '@angular/common';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  //imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
title = 'first-angular-app';
  users = DUMMY_USERS;
  selectederId?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.selectederId)!;
  }
  onSelectedUser(id: string) {
    console.log('Selected user with id: ' + id);
    this.selectederId = id;
  }
}
