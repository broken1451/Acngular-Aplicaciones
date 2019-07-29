import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

// Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';


// Componentes
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';

// Angular GoogleMaps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDl9sSkISQzmmB5ClHYRelAQYl5tfGtfW4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
