import { Component, OnInit } from '@angular/core';
import {StatusService} from "../../../services/status.service";
import {ServerRequestsService} from "../../../services/server-requests.service";

@Component({
  selector: 'face-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public status: StatusService,
              public server: ServerRequestsService) { }

  ngOnInit(): void {
  }


}
