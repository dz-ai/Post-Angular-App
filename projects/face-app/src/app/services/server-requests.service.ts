import {Injectable} from '@angular/core';
import {UserInterface} from "../type/interfaces/user-interface";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostInterface} from "../type/interfaces/postInterface";
import {StatusService} from "./status.service";


@Injectable({
  providedIn: 'root'
})
export class ServerRequestsService {

  url: string = 'http://localhost:7000';
  headerOption = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Auth': `Bearer ${localStorage.getItem('token')}`
    })
  }

  constructor(private http: HttpClient,
              private status: StatusService) {
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(`${this.url}/users/all`)
  }

  signIn(user: UserInterface): Observable<string> {
    return this.http.post<string>(`${this.url}/users`, user, this.headerOption)
  }

  creatPost(post?: string): Observable<PostInterface> {
    console.log(post)
    const token = localStorage.getItem('token');
    return this.http.post<PostInterface>(`${this.url}/posts/new-post`, {post: post, token: token}, this.headerOption)

  }

  getPosts(): Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(`${this.url}/posts/posts`)
  }

  getUserPosts(username?: string):void {
      this.http.post<PostInterface[]>(`${this.url}/posts/user-posts`, {username}, this.headerOption)
        .subscribe(posts => this.status.showPosts = posts);
  }

  logIn(user: UserInterface): Observable<string> {
    return this.http.post<string>(`${this.url}/auth/login`, user, this.headerOption)
  }

}







