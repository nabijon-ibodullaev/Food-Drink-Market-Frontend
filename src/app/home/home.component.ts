import {
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { FoodProduct } from '../Models/food-product';
import { ProductCategories } from '../Models/product-categories';
import { ProductService } from '../Services/product.service';
import { AddToCardService } from '../Services/add-to-card.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fruitCategory: ProductCategories[] = [];
  drinkCategory: ProductCategories[] = [];
  foodProducts: FoodProduct[] = [];

  EMPTY_MESSAGE: string = '';
  IS_ACTIVE_MENU: boolean = false;
  items = [];
  _ADD_TO_CARD: boolean = false;
  isFirst = true;

  @ViewChildren('subTotalWrap') subTotalItems!: QueryList<ElementRef>;
  @ViewChildren('subTotalWrap_existing')
  subTotalItems_existing!: QueryList<ElementRef>;
  constructor(
    private product: ProductService,
    private AddToCardService: AddToCardService
  ) {}

  ngOnInit() {
    this.product.getFruitCategories().subscribe((data) => {
      this.fruitCategory = data;
    });

    this.product.getDrinkCategories().subscribe((data) => {
      this.drinkCategory = data;
    });

    this.product.getFoodProducts().subscribe((data) => {
      this.foodProducts = data;

      this.foodProducts.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  slidesStore = [
    {
      id: 1,
      src: '../../assets/offer-1.png',
      alt: 'Hello',
      title: 'Hello Japan',
    },
    {
      id: 2,
      src: '../../assets/offer-2.png',
      alt: 'Hello',
      title: 'Hello Japan',
    },
    {
      id: 3,
      src: '../../assets/offer-3.png',
      alt: 'Hello',
      title: 'Hello Japan',
    },
    {
      id: 4,
      src: '../../assets/offer-4.png',
      alt: 'Hello',
      title: 'Hello Japan',
    },
  ];

  // ! Own carousel settings
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 2,
      },
      940: {
        items: 3,
      },
    },
    nav: true,
  };

  allProducts() {
    this.product.getFoodProducts().subscribe((data) => {
      this.foodProducts = data;
    });
  }
  Fruits() {
    this.product.getOnlyFruits().subscribe((data) => {
      this.foodProducts = data;
    });
  }
  Vegetables() {
    this.product.getOnlyVegetables().subscribe((data) => {
      this.foodProducts = data;
    });
  }
  MeatAndPoultry() {
    this.product.getOnlyMeat().subscribe((data) => {
      this.foodProducts = data;
    });
  }
  Fish() {
    this.product.getOnlyFish().subscribe((data) => {
      this.foodProducts = data;
      if (data.length <= 0) {
        this.EMPTY_MESSAGE = 'Empty Products';
      }
    });
  }
  Grains() {
    this.product.getOnlyGrains().subscribe((data) => {
      this.foodProducts = data;
    });
  }
  Eggs() {
    this.product.getOnlyEggs().subscribe((data) => {
      this.foodProducts = data;
    });
  }
  DairyFoods() {
    this.product.getOnlyDairy().subscribe((data) => {
      this.foodProducts = data;
    });
  }
  Alcoholic() {
    this.product.getOnlyAlcoholic().subscribe((res) => {
      this.foodProducts = res;
    });
  }
  NonAlcoholic() {
    this.product.getOnlyNonAlcoholic().subscribe((res) => {
      this.foodProducts = res;
    });
  }
  HotDrinks() {
    this.product.getOnlyHotDrinks().subscribe((res) => {
      this.foodProducts = res;
    });
  }
  JuiceAndPlantDrinks() {
    this.product.getOnlyJuice().subscribe((res) => {
      this.foodProducts = res;
    });
  }

  addToCart(item: FoodProduct) {
    this.AddToCardService.addtoCart(item);
  }
}
