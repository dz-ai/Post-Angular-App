import {Component, Input, OnInit} from '@angular/core';
import {PostInterface} from "../../../type/interfaces/postInterface";
import {StatusService} from "../../../services/status.service";

@Component({
  selector: 'face-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post:PostInterface
  constructor(public status: StatusService) { }

  ngOnInit(): void {
  }

}
