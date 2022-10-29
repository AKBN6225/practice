import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutingHomeComponent } from './components/routing-home/routing-home.component';
import { RoutingCountryListComponent } from './components/routing-country-list/routing-country-list.component';
import { RoutingAboutComponent } from './components/routing-about/routing-about.component';

const routes: Routes = [
  { path: '',component : RoutingHomeComponent},
  { path: 'countries',component : RoutingCountryListComponent},
  { path: 'about',component:RoutingAboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
