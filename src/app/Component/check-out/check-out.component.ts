import { Component, OnInit } from '@angular/core';
import { AddToCardService } from '../../Services/add-to-card.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent implements OnInit {
  public checkOutProducts: any;
  constructor(
    private AddToCardService: AddToCardService,
    private router: Router
  ) {}

  ngOnInit() {}
  goShopping() {
    this.router.navigate(['/']);
  }
}
