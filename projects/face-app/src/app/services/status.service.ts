import {Injectable} from '@angular/core';
import {LogStatusInterface} from "../type/interfaces/login-interface";
import {UserInterface} from "../type/interfaces/user-interface";
import {PostInterface} from "../type/interfaces/postInterface";
import {ServerRequestsService} from "./server-requests.service";
import {BehaviorSubject, } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class StatusService {

  loginUser = localStorage.getItem('username');

  usersList:UserInterface[] = [];

  showPosts:PostInterface[] = [];

  isLogin =  new BehaviorSubject<boolean>(false)

  constructor() { }

  logout() {
    localStorage.setItem('token', '');
    localStorage.setItem('username', '');
    this.isLogin.next( false);
  }

}
