import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferComponent } from './components/offer/offer.component';
import {HttpClientModule} from "@angular/common/http";
import { MenuComponent } from './components/menu/menu.component';
import {NgbDropdownModule, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    OfferComponent,
    MenuComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgbDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
