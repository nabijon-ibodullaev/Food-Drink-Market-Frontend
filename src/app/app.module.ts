import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './Services/product.service';
import { ShopsComponent } from './Component/shops/shops.component';
import { FAQComponent } from './Component/faq/faq.component';
import { LoginComponent } from './Component/login/login.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ContactComponent } from './Component/contact/contact.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { AdminComponent } from './Admin/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxEchartsModule } from 'ngx-echarts';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './Admin/admin-users/admin-users.component';
import { AdminBannerComponent } from './Admin/admin-banner/admin-banner.component';
import { AdminSaleProductsComponent } from './Admin/admin-sale-products/admin-sale-products.component';
import { AdminNewsComponent } from './Admin/admin-news/admin-news.component';
import { AdminBlogComponent } from './Admin/admin-blog/admin-blog.component';
import { UsersService } from './Admin/Services/users.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    ShopsComponent,
    FAQComponent,
    LoginComponent,
    SignUpComponent,
    ContactComponent,
    AdminComponent,
    AdminProductsComponent,
    AdminUsersComponent,
    AdminBannerComponent,
    AdminSaleProductsComponent,
    AdminNewsComponent,
    AdminBlogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CarouselModule,
    FlexLayoutModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [ProductService, UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
