import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursoComponent } from './components/curso/curso.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { LoginComponent } from './components/login/login.component';
import { ActividadVisualComponent } from './components/actividad-visual/actividad-visual.component';
import { ActividadAuditivoComponent } from './components/actividad-auditivo/actividad-auditivo.component';
import { ActividadKinestesicoComponent } from './components/actividad-kinestesico/actividad-kinestesico.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    CursoComponent,
    ActividadComponent,
    LoginComponent,
    ActividadVisualComponent,
    ActividadAuditivoComponent,
    ActividadKinestesicoComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
