import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AppRoutes } from './app.route';
import { PoketableComponent } from './poketable/poketable.component';
import { PokefilterComponent } from './pokefilter/pokefilter.component';
import { PokemonesComponent } from './pokemones/pokemones.component';
import { EntrenadoresComponent } from './entrenadores/entrenadores.component';
import { EntrenadorestableComponent } from './entrenadorestable/entrenadorestable.component';
import { EntrenadorModalComponent } from './entrenador-modal/entrenador-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PoketableComponent,
    PokefilterComponent,
    PokemonesComponent,
    EntrenadoresComponent,
    EntrenadorestableComponent,
    EntrenadorModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutes,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EntrenadorModalComponent]
})
export class AppModule { }
