import { MtgpqComponent } from './funstuff/gaming/mtgpq/mtgpq.component';
import { MtgComponent } from './funstuff/gaming/mtg/mtg.component';
import { LotroComponent } from './funstuff/gaming/lotro/lotro.component';
import { EverquestComponent } from './funstuff/gaming/everquest/everquest.component';
import { AdndComponent } from './funstuff/gaming/adnd/adnd.component';
import { GamingComponent } from './funstuff/gaming/gaming.component';
import { AstropixComponent } from './funstuff/astropix/astropix.component';
import { ArcheryComponent } from './funstuff/archery/archery.component';
import { FunstuffComponent } from './funstuff/funstuff/funstuff.component';
import { Berlin2019Component } from './vacation/berlin2019/berlin2019.component';
import { Ftbragg2016Component } from './vacation/ftbragg2016/ftbragg2016.component';
import { Nola2019Component } from './vacation/nola2019/nola2019.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DogsComponent } from './dogs/dogs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacationComponent } from './vacation/vacation.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'Dogs', component: DogsComponent },
  { path: 'Vacation', component: VacationComponent },
  { path: 'nola2019', component: Nola2019Component },
  { path: 'ftbragg2016', component: Ftbragg2016Component },
  { path: 'berlin2019', component: Berlin2019Component },
  { path: 'funstuff', component: FunstuffComponent },
  { path: 'funstuff/archery', component: ArcheryComponent},
  { path: 'funstuff/astropix', component: AstropixComponent },
  { path: 'funstuff/gaming', component: GamingComponent },
  { path: 'funstuff/gaming/adnd', component: AdndComponent },
  { path: 'funstuff/gaming/everquest', component: EverquestComponent },
  { path: 'funstuff/gaming/lotro', component: LotroComponent },
  { path: 'funstuff/gaming/mtg', component: MtgComponent },
  { path: 'funstuff/gaming/mtgpq', component: MtgpqComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
