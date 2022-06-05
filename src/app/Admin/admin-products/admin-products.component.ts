import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FoodProduct } from 'src/app/Models/food-product';
import { ProductService } from '../../Services/product.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss'],
})
export class AdminProductsComponent implements OnInit, AfterViewInit {
  opened: boolean = false;
  TOTAL_PRODUCTS!: number;
  selectedValue!: string;
  selectCategory: any;
  isChecked!: boolean;
  isNew!: boolean;

  displayedColumns: string[] = [
    'imageUrl',
    'name',
    'description',
    'price',
    'rating',
    'categoryName',
    'newBadge',
    'saleBadge',
    'oldPrice',
    'newPrice',
    'total',
    'edit',
  ];
  dataSource!: MatTableDataSource<FoodProduct>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: ProductService, private http: HttpClient) {}

  ngOnInit() {
    this.service.getFoodProducts().subscribe((data) => {
      this.dataSource = new MatTableDataSource<FoodProduct>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.TOTAL_PRODUCTS = data.length;
    });

    this.service.getAllFruitAndDrinkCategory().subscribe((data) => {
      this.selectCategory = data;
      console.log(data);
    });
  }
  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  productEdit(product: FoodProduct) {
    console.log(product);
  }
  deleteProduct(product: FoodProduct) {
    console.log(product._id);
    this.http
      .delete('http://localhost:3000/api/foods' + '/' + product._id)
      .subscribe((data) => {
        console.log(data);
      });
    window.location.reload();
  }

  onSubmitProduct(form: NgForm) {
    console.log(form.value);
    this.service.newProduct(form.value).subscribe((data) => {
      console.log(data);
    });
    form.resetForm();
    window.location.reload();
  }
}
