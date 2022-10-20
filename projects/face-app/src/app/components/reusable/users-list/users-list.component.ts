import {Component, OnInit} from '@angular/core';
import {ServerRequestsService} from "../../../services/server-requests.service";
import {StatusService} from "../../../services/status.service";

@Component({
  selector: 'face-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {


  constructor(public server: ServerRequestsService,
              public status: StatusService) {
  }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers() {
    this.server.getUsers()
      .subscribe(res => {
        this.status.usersList = res;
      });
  }


}
