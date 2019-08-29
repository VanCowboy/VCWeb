import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import 'hammerjs';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

import { DogsComponent } from './dogs/dogs.component';
import { VacationComponent } from './vacation/vacation.component';
import { Nola2019Component } from './vacation/nola2019/nola2019.component';
import { Ftbragg2016Component } from './vacation/ftbragg2016/ftbragg2016.component';
import { Berlin2019Component } from './vacation/berlin2019/berlin2019.component';
import { HomeComponent } from './home/home.component';
import { ArcheryComponent } from './funstuff/archery/archery.component';
import { GamingComponent } from './funstuff/gaming/gaming.component';
import { FunstuffComponent } from './funstuff/funstuff/funstuff.component';
import { LotroComponent } from './funstuff/gaming/lotro/lotro.component';
import { AdndComponent } from './funstuff/gaming/adnd/adnd.component';
import { EverquestComponent } from './funstuff/gaming/everquest/everquest.component';
import { MtgComponent } from './funstuff/gaming/mtg/mtg.component';
import { MtgpqComponent } from './funstuff/gaming/mtgpq/mtgpq.component';
import { AstropixComponent } from './funstuff/astropix/astropix.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DogsComponent,
    VacationComponent,
    PageNotFoundComponent,
    FooterComponent,
    Nola2019Component,
    Ftbragg2016Component,
    Berlin2019Component,
    HomeComponent,
    ArcheryComponent,
    GamingComponent,
    FunstuffComponent,
    LotroComponent,
    AdndComponent,
    EverquestComponent,
    MtgComponent,
    MtgpqComponent,
    AstropixComponent,
    AdminComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    OwlModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
