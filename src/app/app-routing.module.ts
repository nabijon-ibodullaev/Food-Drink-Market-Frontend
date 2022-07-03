import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './Component/contact/contact.component';
import { CheckOutComponent } from './Component/check-out/check-out.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    loadChildren: () =>
      import('./Admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', component: NotFoundComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
