import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodProduct } from '../Models/food-product';
import { ProductCategories } from '../Models/product-categories';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getAllCategory(): Observable<ProductCategories[]> {
    return this.http.get<ProductCategories[]>(
      'http://localhost:3000/api/categories'
    );
  }

  getFruitCategories(): Observable<ProductCategories[]> {
    return this.http.get<ProductCategories[]>(
      'http://localhost:3000/api/food-categories'
    );
  }
  getDrinkCategories(): Observable<ProductCategories[]> {
    return this.http.get<ProductCategories[]>(
      'http://localhost:3000/api/drink-categories'
    );
  }

  getFoodProducts(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>('http://localhost:3000/api/foods');
  }
}
