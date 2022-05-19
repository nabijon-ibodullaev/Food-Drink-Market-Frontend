import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-banner',
  templateUrl: './admin-banner.component.html',
  styleUrls: ['./admin-banner.component.scss'],
})
export class AdminBannerComponent implements OnInit {
  opened: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
