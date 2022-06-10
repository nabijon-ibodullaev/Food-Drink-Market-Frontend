import { MatPaginator } from '@angular/material/paginator';
export class FoodProduct {
  _id!: any;
  name!: string;
  description!: string;
  imageUrl!: string;
  price!: number;
  rating!: number;
  categoryName!: string;
  qtyTotal!: number;
  newBadge!: boolean;
  saleBadge!: boolean;
  oldPrice!: number;
  newPrice!: number;
  total!: number;
  paginator!: MatPaginator;
}
