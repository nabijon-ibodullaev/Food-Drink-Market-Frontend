import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../Admin/admin/admin.component';
import { AdminProductsComponent } from '../Admin/admin-products/admin-products.component';
import { AdminUsersComponent } from '../Admin/admin-users/admin-users.component';
import { AdminBannerComponent } from '../Admin/admin-banner/admin-banner.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'admin-product', component: AdminProductsComponent },
  { path: 'admin-user', component: AdminUsersComponent },
  { path: 'admin-banner', component: AdminBannerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
