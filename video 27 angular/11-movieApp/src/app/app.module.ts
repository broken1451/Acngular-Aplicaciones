// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, JsonpClientBackend, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HomeComponent } from './components/home/home.component';
import { GaleriaComponent } from './components/home/galeria.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';

// Servicios
import { PeliService } from './services/peli.service';
import { LoadingComponent } from './components/loading/loading.component';



{}



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BusquedaComponent,
    HomeComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    GaleriaComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientJsonpModule
  ],
  providers: [PeliService],
  bootstrap: [AppComponent]
})
export class AppModule { }
