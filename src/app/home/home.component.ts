import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FoodProduct } from '../Models/food-product';
import { ProductCategories } from '../Models/product-categories';
import { ProductService } from '../Services/product.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fruitCategory: ProductCategories[] = [];
  drinkCategory: ProductCategories[] = [];
  foodProducts: FoodProduct[] = [];
  isFirst = true;
  constructor(private product: ProductService) {}

  ngOnInit() {
    this.product.getFruitCategories().subscribe((data) => {
      this.fruitCategory = data;
    });

    this.product.getDrinkCategories().subscribe((data) => {
      this.drinkCategory = data;
    });

    this.product.getFoodProducts().subscribe((data) => {
      this.foodProducts = data;
    });
  }
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
  ];

  // ! Own carousel settings
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
}
