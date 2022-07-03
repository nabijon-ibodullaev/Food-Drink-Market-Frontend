import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-banner',
  templateUrl: './admin-banner.component.html',
  styleUrls: ['./admin-banner.component.scss'],
})
export class AdminBannerComponent implements OnInit {
  opened: boolean = false;
  productId: any;
  BannerName: any;
  bannerImageUrl: any;
  BannerDescription: any;
  showUpdateButton: boolean = false;
  hideSaveButton: boolean = true;
  fontSizeValue!: number;

  // !banner style
  isLeft: boolean = false;
  isCenter: boolean = false;
  isRight: boolean = false;
  isUppercase: boolean = false;
  isLowercase: boolean = false;
  isBold: boolean = false;
  isItalic: boolean = false;
  isUnderline: boolean = false;

  isActiveLowercase: boolean = false;
  isActiveUppercase: boolean = false;

  onSubmitBanner(form: NgForm) {}
  constructor() {}

  ngOnInit() {
    console.log(this.fontSizeValue);
  }

  alignLeft() {
    this.isLeft = !this.isLeft;
    this.isCenter = false;
    this.isRight = false;
  }
  alignCenter() {
    this.isCenter = !this.isCenter;
    this.isLeft = false;
    this.isRight = false;
  }
  alignRight() {
    this.isRight = !this.isRight;
    this.isLeft = false;
    this.isCenter = false;
  }
  lowercase() {
    this.isUppercase = false;
    this.isLowercase = !this.isLowercase;
    this.isActiveLowercase = !this.isActiveLowercase;
    this.isActiveUppercase = false;
  }
  uppercase() {
    this.isUppercase = !this.isUppercase;
    this.isLowercase = false;
    this.isActiveUppercase = !this.isActiveUppercase;
    this.isActiveLowercase = false;
  }
  bold() {
    this.isBold = !this.isBold;
    this.isItalic = false;
    this.isUnderline = false;
  }
  italic() {
    this.isItalic = !this.isItalic;
    this.isBold = false;
    this.isUnderline = false;
  }
  underline() {
    this.isUnderline = !this.isUnderline;
    this.isBold = false;
    this.isItalic = false;
  }
}
