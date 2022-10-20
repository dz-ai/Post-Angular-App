import { Component, OnInit } from '@angular/core';
import {ServerRequestsService} from "../../../services/server-requests.service";
import {Router} from "@angular/router";
import {StatusService} from "../../../services/status.service";
import {UserInterface} from "../../../type/interfaces/user-interface";

@Component({
  selector: 'face-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  constructor(private server:ServerRequestsService,
              private status:StatusService,
              private router: Router) { }

  ngOnInit(): void {
  }

  logInUser(user: UserInterface): void {
    if (user) {
    this.server.logIn(user)
      .subscribe(res => {
        console.log(res);
        if (res) {
          localStorage.setItem('token', res);
          localStorage.setItem('username', user.username);
          this.router.navigateByUrl('/time-line')
            .then(_ => {
              this.status.loginUser = user.username;
              this.status.isLogin.next(true);
            })
        }
      })
    }
  }


}
