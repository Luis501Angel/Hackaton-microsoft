import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {CursoComponent} from './components/curso/curso.component';
import {ActividadComponent} from './components/actividad/actividad.component';
import {LoginComponent} from './components/login/login.component';
import {ActividadKinestesicoComponent} from './components/actividad-kinestesico/actividad-kinestesico.component';
import {ActividadVisualComponent} from './components/actividad-visual/actividad-visual.component';
import {ActividadAuditivoComponent} from './components/actividad-auditivo/actividad-auditivo.component';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'curso',
    component: CursoComponent
  },
  {
    path: 'actividad',
    component: ActividadComponent
  },
  {
    path: 'actividad/kinestesico',
    component: ActividadKinestesicoComponent
  },
  {
    path: 'actividad/visual',
    component: ActividadVisualComponent
  },
  {
    path: 'actividad/auditivo',
    component: ActividadAuditivoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
