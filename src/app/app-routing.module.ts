import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopsComponent } from './Component/shops/shops.component';
import { FAQComponent } from './Component/faq/faq.component';
import { LoginComponent } from './Component/login/login.component';
import { SignUpComponent } from './Component/sign-up/sign-up.component';
import { ContactComponent } from './Component/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
