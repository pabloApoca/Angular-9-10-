import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsProductComponent } from './details-product/details-product.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'products', component: ProductsComponent },
  {path:'product/:id', component: DetailsProductComponent},
  {path: '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
