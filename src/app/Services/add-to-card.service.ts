import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FoodProduct } from '../Models/food-product';

@Injectable({
  providedIn: 'root',
})
export class AddToCardService {
  constructor() {}
  items: FoodProduct[] = [];

  addToCart(addedItem: FoodProduct) {
    this.items.push(addedItem);

    this.saveCart();
  }

  getItems() {
    return this.items;
  }

  loadCart() {
    this.items = JSON.parse(localStorage.getItem('cart')!) ?? [];
  }

  saveCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.removeItem('cart');
  }

  removeItem(item: FoodProduct) {
    const index = this.items.findIndex((o) => o._id === item._id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }
  itemInCart(item: FoodProduct): boolean {
    return this.items.findIndex((o) => o._id === item._id) > -1;
  }
}
