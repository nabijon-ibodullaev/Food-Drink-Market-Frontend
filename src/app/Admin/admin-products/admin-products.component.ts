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
  showUpdateButton: boolean = false;
  hideSaveButton: boolean = true;
  TITLE_PRODUCT = 'CREATE NEW PRODUCT';

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

  deleteProduct(product: FoodProduct) {
    this.http
      .delete('http://localhost:3000/api/foods' + '/' + product._id)
      .subscribe((data) => {
        console.log(data);
      });
    window.location.reload();
  }

  onSubmitProduct(form: NgForm) {
    // console.log(form.value);
    this.service.newProduct(form.value).subscribe((data) => {
      console.log(data);
    });
    form.resetForm();
    window.location.reload();
  }
  resetForm(form: NgForm) {
    form.resetForm();
  }

  productId?: string;
  productName?: string;
  productImageUrl?: string;
  productPrice!: number;
  productTotal!: number;
  productCategory: any;
  productDescription: string = '';
  productBadgeNew: any;
  productBadgeSale: any;
  productBadgeSalePrice!: number;

  productEdit(product: FoodProduct) {
    this.hideSaveButton = false;
    this.showUpdateButton = true;
    this.productId = product._id;
    this.productName = product.name;
    this.productImageUrl = product.imageUrl;
    this.productPrice = product.price;
    this.productTotal = product.total;
    this.productCategory = product.categoryName;
    this.productDescription = product.description;
    this.productBadgeNew = product.newBadge;
    this.productBadgeSale = product.saleBadge;
    this.productBadgeSalePrice = product.newPrice;
    this.TITLE_PRODUCT = 'UPDATE PRODUCT';
  }
  updateProduct(product: NgForm) {
    this.hideSaveButton = true;
    this.showUpdateButton = false;
    this.service
      .updateProduct(product.value)
      .subscribe((res) => console.log(res));

    this.TITLE_PRODUCT = 'CREATE NEW PRODUCT';
    product.resetForm();
    window.location.reload();
  }
  Reset(form: NgForm) {
    this.hideSaveButton = true;
    this.showUpdateButton = false;
    form.resetForm();
    this.TITLE_PRODUCT = 'CREATE NEW PRODUCT';
  }
}
