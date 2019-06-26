import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { childreRoutes } from './components/usuario/usuario.routes';

// // rutas hijas
// import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
// import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
// import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'usuario/:id',
    component: UsuarioComponent,
    // children: [
    //   // { path: 'nuevo', component: UsuarioNuevoComponent },
    //   // { path: 'editar', component: UsuarioEditarComponent },
    //   // { path: 'detalle', component: UsuarioDetalleComponent },
    //   // { path: '**', pathMatch: 'full' , component: UsuarioEditarComponent },
    // ]
    children: childreRoutes
  },
  { path: '**', pathMatch: 'full' , component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

