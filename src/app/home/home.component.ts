import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };
  constructor() {}

  ngOnInit(): void {}
  slidesStore = [
    {
      id: 1,
      src: '../../assets/offer-1.png',
      alt: 'Hello',
      title: 'Hello Japan',
    },
    {
      id: 2,
      src: '../../assets/offer-2.png',
      alt: 'Hello',
      title: 'Hello Japan',
    },
    {
      id: 3,
      src: '../../assets/offer-3.png',
      alt: 'Hello',
      title: 'Hello Japan',
    },
    {
      id: 4,
      src: '../../assets/offer-4.png',
      alt: 'Hello',
      title: 'Hello Japan',
    },
    {
      id: 5,
      src: '../../assets/offer-4.png',
      alt: 'Hello',
      title: 'Hello Japan',
    },
  ];
}
