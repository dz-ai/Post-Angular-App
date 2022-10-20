import { Component, OnInit } from '@angular/core';
import {StatusService} from "../../../services/status.service";

@Component({
  selector: 'face-root',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private status: StatusService) { }

  ngOnInit(): void {
    this.checkToken()
  }

  checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.status.isLogin.next(true);
    }
  }

}
