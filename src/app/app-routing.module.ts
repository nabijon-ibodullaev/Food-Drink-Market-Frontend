import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FAQComponent } from './Component/faq/faq.component';
import { LoginComponent } from './Component/login/login.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ContactComponent } from './Component/contact/contact.component';
import { AdminComponent } from './Admin/admin/admin.component';
import { AdminProductsComponent } from './Admin/admin-products/admin-products.component';
import { AdminUsersComponent } from './Admin/admin-users/admin-users.component';
import { AdminBannerComponent } from './Admin/admin-banner/admin-banner.component';
import { AdminSaleProductsComponent } from './Admin/admin-sale-products/admin-sale-products.component';
import { AdminBlogComponent } from './Admin/admin-blog/admin-blog.component';
import { AdminNewsComponent } from './Admin/admin-news/admin-news.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin-products', component: AdminProductsComponent },
  { path: 'admin-users', component: AdminUsersComponent },
  { path: 'admin-banner', component: AdminBannerComponent },
  { path: 'admin-sale-products', component: AdminSaleProductsComponent },
  { path: 'admin-blog', component: AdminBlogComponent },
  { path: 'admin-news', component: AdminNewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
