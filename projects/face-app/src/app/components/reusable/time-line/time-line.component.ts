import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ServerRequestsService} from "../../../services/server-requests.service";
import {StatusService} from "../../../services/status.service";

@Component({
  selector: 'face-time-line',
  templateUrl: './time-line.component.html',
  styleUrls: ['./time-line.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})

export class TimeLineComponent implements OnInit {

  sidebarUserParam:string;

  constructor(private route: ActivatedRoute,
              private server: ServerRequestsService,
              public status: StatusService,
              private ref: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.isLogUser();
  }

  isLogUser():void {
    this.sidebarUserParam = String(this.route.snapshot.paramMap.get('id'));

    this.status.isLogin.subscribe(isTrue => {
      if (isTrue) {
        this.showUserPosts(this.sidebarUserParam);
      } else {
        console.log('not log')
        this.getPosts()
      }
    });
  }


  getPosts(): void {
    this.server.getPosts()
      .subscribe(value => {
        console.log(value)
        this.status.showPosts = value
      })
  }

  showUserPosts(whichUserToShow?:string) {
        console.log(whichUserToShow);
    this.server.getUserPosts(whichUserToShow);
  }

}
