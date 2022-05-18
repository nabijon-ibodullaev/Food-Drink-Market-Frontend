import { Component, OnInit } from '@angular/core';
import { ProductService } from '../Services/product.service';
import { ProductCategories } from '../Models/product-categories';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  allCategory: ProductCategories[] = [];
  constructor(private service: ProductService) {}

  ngOnInit() {
    this.service.getAllCategory().subscribe((data) => {
      this.allCategory = data;
      console.log(data);
    });
  }
}
