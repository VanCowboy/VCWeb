import { Nola2019Component } from './vacation/nola2019/nola2019.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DogsComponent } from './dogs/dogs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacationComponent } from './vacation/vacation.component';

const routes: Routes = [
 { path: 'Dogs', component: DogsComponent},
 { path: 'Vacation', component: VacationComponent},
 {path: 'nola2019', component: Nola2019Component},
 { path: '', redirectTo: '/index', pathMatch: 'full'},
 {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
