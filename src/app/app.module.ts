import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DogsComponent } from './dogs/dogs.component';
import { VacationComponent } from './vacation/vacation.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { Nola2019Component } from './vacation/nola2019/nola2019.component';
import { OwlModule } from 'ngx-owl-carousel';
import 'hammerjs';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogsComponent,
    VacationComponent,
    PageNotFoundComponent,
    FooterComponent,
    Nola2019Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    OwlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
