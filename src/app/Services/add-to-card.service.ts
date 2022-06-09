import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FoodProduct } from '../Models/food-product';

@Injectable({
  providedIn: 'root',
})
export class AddToCardService {
  constructor() {}
  products: FoodProduct[] = [];
  public productList = new BehaviorSubject<any>([]);

  getProducts() {
    return this.productList.asObservable();
  }
  setProduct(product: any) {
    this.products.push(...product);
    this.productList.next(product);
  }

  addtoCart(product: any) {
    this.products.push(product);
    this.productList.next(this.products);
    this.getTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.products.map((a: any) => {
      grandTotal += a.price;
    });
    return grandTotal;
  }
  removeCardItem(product: any) {
    this.products.map((a: any, index: any) => {
      if (product._id === a._id) {
        this.products.splice(index, 1);
        this.getTotalPrice();
      }
    });
  }

  removeAllCart() {
    this.products = [];
    this.productList.next(this.products);
  }
}
