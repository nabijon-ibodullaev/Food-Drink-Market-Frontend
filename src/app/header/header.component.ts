import { CurrencyPipe } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { FoodProduct } from '../Models/food-product';
import { ProductCategories } from '../Models/product-categories';
import { AuthService } from '../Services/auth.service';
import { ProductService } from '../Services/product.service';
import { AddToCardService } from '../Services/add-to-card.service';
import { Router } from '@angular/router';
import { AdminService } from '../Services/admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  showShoppingCard: boolean = false;
  allCategory: ProductCategories[] = [];
  isAdmin!: boolean;
  isVisibleHeader: boolean = false;
  isUserAuth = false;
  isUserAuthListener!: Subscription;

  public items: FoodProduct[] = [];
  public grandTotal: number = 0;
  public totalItem: number = 0;
  public totalProductNumber!: FoodProduct[];
  i: any;

  private authListenerSubs!: Subscription;
  userIsAuth!: boolean;
  UserProfile: any;

  @ViewChildren('subTotalWrap') subTotalItems!: QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing')
  subTotalItems_existing!: QueryList<ElementRef>;

  addCardClick() {
    this.showShoppingCard = !this.showShoppingCard;
  }

  constructor(
    private ProductService: ProductService,
    private AddToCardService: AddToCardService,
    private currencyPipe: CurrencyPipe,
    private Router: Router,
    public auth: AuthService,
    public admin: AdminService
  ) {}

  ngOnInit() {
    this.auth.getIsLoggedIn().subscribe((data) => {
      this.isUserAuth = data;
    });

    this.ProductService.getAllCategory().subscribe(
      (data) => {
        this.allCategory = data;
      },
      (error) => {
        console.log(error, 'Something went wrong');
      }
    );
    this.AddToCardService.loadCart();
    this.items = this.AddToCardService.getItems();

    this.authListenerSubs = this.auth
      .getAuthStatusListener()
      .subscribe((isAuth) => {
        console.log(isAuth);
      });
    this.auth
      .getIsAdminStatusListener()
      .subscribe((data) => (this.isAdmin = data));
  }

  checkOut() {
    this.Router.navigate(['/check-out']);
  }
  //----- calculate total
  get total() {
    return this.items.reduce(
      (sum: any, x: FoodProduct) => ({
        qtyTotal: 1,
        price: sum.price + x.qtyTotal * x.price,
      }),
      { qtyTotal: 1, price: 0 }
    ).price;
  }

  changeSubtotal(item: FoodProduct, index: number) {
    const qty = item.qtyTotal;
    const amt = item.price;
    const subTotal = amt * qty;
    const subTotal_converted = this.currencyPipe.transform(subTotal, 'USD');

    this.subTotalItems.toArray()[index].nativeElement.innerHTML =
      subTotal_converted;
    this.AddToCardService.saveCart();
  }

  //----- clear cart item
  clearCart() {
    this.AddToCardService.clearCart();
    this.items = [...this.AddToCardService.getItems()];
  }
  //----- remove specific item
  removeFromCart(item: FoodProduct) {
    this.AddToCardService.removeItem(item);
    this.items = this.AddToCardService.getItems();
  }

  ngOnDestroy() {
    this.authListenerSubs.unsubscribe();
  }
  changeVisible() {
    let shop = document.getElementById('shoppingCard') as HTMLElement;
    shop.style.display = 'none';
  }
  hideHeader() {
    this.isVisibleHeader = true;
  }

  logOut() {
    this.auth.logOut();
  }
}
