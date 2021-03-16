import {Component, OnInit} from '@angular/core';
import {User} from './models/User';
import {UserService} from './service/user.service';
import {DatePipe} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[] = [];
  user: User = new User();
  pipe = new DatePipe('en-US');

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  saveUser(): void {
    this.userService.insertUser(this.user).subscribe(res => {
      Swal.fire(
        'Good job!',
        res.message,
        'success'
      );
    });
    this.user = new User();
    this.getUsers();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(res => {
      Swal.fire(
        'Good job!',
        res.message,
        'success'
      );
    });
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getAllUser().subscribe(res => {
      this.users = res.data;
    });
  }
}
