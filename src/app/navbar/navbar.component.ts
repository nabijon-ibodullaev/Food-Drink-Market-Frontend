import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { ProductCategories } from '../Models/product-categories';
import { AddToCardService } from '../Services/add-to-card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn = false;
  showShoppingCard: boolean = false;
  allCategory: ProductCategories[] = [];
  ShowNavbar: boolean = false;
  items = [];
  addCardClick() {
    this.showShoppingCard = !this.showShoppingCard;
  }
  showNavbar() {
    this.ShowNavbar = !this.ShowNavbar;
  }
  constructor(
    private service: ProductService,
    private CardService: AddToCardService
  ) {}

  //----- calculate total
  // get total() {
  //   return this.items.reduce(
  //     (sum, x) => ({
  //       qtyTotal: 1,
  //       price: sum.price + x.qtyTotal * x.price,
  //     }),
  //     { qtyTotal: 1, price: 0 }
  //   ).price;
  // }

  ngOnInit() {
    this.service.getAllCategory().subscribe((data) => {
      this.allCategory = data;
    });
    let storeData = localStorage.getItem('isUserLoggedIn');
    console.log('StoreData: ' + storeData);

    if (storeData != null && storeData == 'true') this.isUserLoggedIn = true;
    else this.isUserLoggedIn = false;
  }
}
