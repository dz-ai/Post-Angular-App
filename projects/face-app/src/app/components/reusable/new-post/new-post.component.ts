import { Component, OnInit } from '@angular/core';
import {ServerRequestsService} from "../../../services/server-requests.service";
import {StatusService} from "../../../services/status.service";

@Component({
  selector: 'face-new-post',
  templateUrl:  './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {
  constructor(
    public status:StatusService,
    public server:ServerRequestsService
    ) { }

  ngOnInit(): void {
  }

  onNewPost(post?:string):void {
    post?
      this.server.creatPost(post).subscribe(post => {
        console.log(post)
        this.status.showPosts.unshift(post)
      })
    : ':(';
  }


}
