import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistaComponent },
  //  { path: '', pathMatch: 'full' , redirectTo: 'home', component: HomeComponent},
  { path: '', pathMatch: 'full' , component: HomeComponent},
  // { path: '**', pathMatch: 'full' , redirectTo: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }




