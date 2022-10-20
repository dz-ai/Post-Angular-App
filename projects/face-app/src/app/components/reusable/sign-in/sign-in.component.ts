import { Component, OnInit } from '@angular/core';
import {ServerRequestsService} from "../../../services/server-requests.service";
import {UserInterface} from "../../../type/interfaces/user-interface";
import {Router} from "@angular/router";
import {StatusService} from "../../../services/status.service";


@Component({
  selector: 'face-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private server: ServerRequestsService,
              private router:Router,
              private status: StatusService) { }

  ngOnInit(): void {
  }


  onSign(user: UserInterface) {
    this.server.signIn(user).subscribe(res => {
      localStorage.setItem('token' , res);
      this.status.usersList.push(user)
      this.status.loginUser = user.username;
      this.router.navigateByUrl('/time-line')
          .then(_ => {
            this.status.isLogin.next(true);
          })
      }
    )
  }


}
