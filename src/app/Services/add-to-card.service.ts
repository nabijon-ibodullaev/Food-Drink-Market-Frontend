import { Injectable } from '@angular/core';
import { FoodProduct } from '../Models/food-product';

@Injectable({
  providedIn: 'root',
})
export class AddToCardService {
  constructor() {}
  items: any[] = [];

  addToCart(addedItem: string[]) {
    this.items.push(addedItem);

    this.saveCart();
  }
  getItems() {
    return this.items;
  }
  loadCart(): void {
    this.items = JSON.parse(localStorage.getItem('cart_items')!);
  }
  saveCart(): void {
    localStorage.setItem('cart_items', JSON.stringify(this.items));
  }

  clearCart(items: any) {
    this.items = [];

    localStorage.removeItem('cart_items');
  }

  removeItem(item: FoodProduct) {
    const index = this.items.findIndex((o: FoodProduct) => o._id === item._id);

    if (index > -1) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  itemInCart(item: FoodProduct): boolean {
    return this.items.findIndex((o: FoodProduct) => o._id === item._id) > -1;
  }
}
