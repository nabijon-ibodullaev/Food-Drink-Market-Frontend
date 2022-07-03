import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AngularMaterialModule } from './modules/angular-material.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FooterComponent } from './footer/footer.component';

import { ContactComponent } from './Component/contact/contact.component';
import { CheckOutComponent } from './Component/check-out/check-out.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';

import { ProductService } from './Services/product.service';
import { UsersService } from './Admin/Services/users.service';
import { AddToCardService } from './Services/add-to-card.service';
import { AdminService } from './Services/admin.service';
import { CurrencyPipe } from '@angular/common';
import { AuthInterceptor } from './Services/auth.interceptor';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,

    ContactComponent,
    CheckOutComponent,
    NotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut: 1200,
    }),
  ],
  providers: [
    ProductService,
    UsersService,
    AddToCardService,
    AdminService,
    CurrencyPipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
