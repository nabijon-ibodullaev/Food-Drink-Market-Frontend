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
import { AdminDashboardComponent } from './Admin/admin-dashboard/admin-dashboard.component';
@NgModule({
  declarations: [AppComponent, NavbarComponent, HomeComponent, FooterComponent, ShopsComponent, FAQComponent, LoginComponent, SignUpComponent, ContactComponent, AdminDashboardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CarouselModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
