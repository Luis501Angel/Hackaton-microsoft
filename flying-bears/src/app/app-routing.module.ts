import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InicioComponent} from './components/inicio/inicio.component';
import {CursoComponent} from './components/curso/curso.component';
import {ActividadComponent} from './components/actividad/actividad.component';
import {LoginComponent} from './components/login/login.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
