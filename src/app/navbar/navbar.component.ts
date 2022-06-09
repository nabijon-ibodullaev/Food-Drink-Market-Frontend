import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { ProductService } from '../Services/product.service';
import { ProductCategories } from '../Models/product-categories';
import { AddToCardService } from '../Services/add-to-card.service';
import { FoodProduct } from '../Models/food-product';
import { CurrencyPipe } from '@angular/common';

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
  public products: FoodProduct[] = [];
  public grandTotal: number = 0;
  public totalItem: number = 0;

  @ViewChildren('subTotalWrap') subTotalItems!: QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing')
  subTotalItems_existing!: QueryList<ElementRef>;

  addCardClick() {
    this.showShoppingCard = !this.showShoppingCard;
  }
  showNavbar() {
    this.ShowNavbar = !this.ShowNavbar;
  }
  constructor(
    private service: ProductService,
    private AddToCardService: AddToCardService,
    private currencyPipe: CurrencyPipe
  ) {}

  ngOnInit() {
    this.service.getAllCategory().subscribe((data) => {
      this.allCategory = data;
    });

    this.AddToCardService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });

    this.AddToCardService.getProducts().subscribe((res) => {
      this.products = res;
      this.grandTotal = this.AddToCardService.getTotalPrice();
    });
  }
  removeProduct(item: any) {
    this.AddToCardService.removeCardItem(item);
  }
  emptyCart() {
    this.AddToCardService.removeAllCart();
  }
}
