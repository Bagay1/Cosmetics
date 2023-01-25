import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OfferComponent} from "./components/offer/offer.component";
import {CategoryComponent} from "./components/category/category.component";

const routes: Routes = [
  {path: '' , component: OfferComponent},
  {path: 'category/:url', component: CategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
