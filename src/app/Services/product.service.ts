import { HttpClient, HttpHeaderResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodProduct } from '../Models/food-product';
import { ProductCategories } from '../Models/product-categories';
import { HttpHeaders } from '@angular/common/http';
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

  getAllFruitAndDrinkCategory(): Observable<ProductCategories[]> {
    return this.http.get<ProductCategories[]>(
      'http://localhost:3000/api/all-categories'
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

  newProduct(food: FoodProduct): Observable<any> {
    return this.http.post('http://localhost:3000/api/foods', food);
  }

  getOnlyFruits(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/fruits'
    );
  }
  getOnlyVegetables(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/vegetables'
    );
  }
  getOnlyMeat(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/meat-and-poultry'
    );
  }
  getOnlyGrains(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/grains'
    );
  }
  getOnlyFish(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/fish-and-seafood'
    );
  }
  getOnlyEggs(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>('http://localhost:3000/api/foods/eggs');
  }
  getOnlyDairy(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/dairy-foods'
    );
  }
  getOnlyAlcoholic(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/alcoholic-drinks'
    );
  }
  getOnlyNonAlcoholic(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/non-alcoholic-drinks'
    );
  }
  getOnlyJuice(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/juice-and-plant-drinks'
    );
  }
  getOnlyHotDrinks(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/hot-drinks'
    );
  }
  getOnlyNewProducts(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/new-products'
    );
  }
  getOnlySaleProducts(): Observable<FoodProduct[]> {
    return this.http.get<FoodProduct[]>(
      'http://localhost:3000/api/foods/sale-products'
    );
  }

  updateProduct(product: FoodProduct): Observable<FoodProduct> {
    return this.http.put<FoodProduct>(
      'http://localhost:3000/api/foods/' + product._id,
      product
    );
  }
}
