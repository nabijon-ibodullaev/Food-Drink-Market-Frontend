import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-blog',
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.scss'],
})
export class AdminBlogComponent implements OnInit {
  opened: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
