import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FoodProduct } from 'src/app/Models/food-product';
import { ProductService } from '../../Services/product.service';

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
    'edit',
  ];
  dataSource!: MatTableDataSource<FoodProduct>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.getFoodProducts().subscribe((data) => {
      this.dataSource = new MatTableDataSource<FoodProduct>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.TOTAL_PRODUCTS = data.length;
    });

    this.service
      .getAllCategory()
      .subscribe((data) => (this.selectCategory = data));
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
    console.log(product);
  }

  foods: any[] = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];
}
