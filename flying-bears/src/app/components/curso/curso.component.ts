import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irAActividad() {
    if (environment.tipo_estudiante === 'estudiante kinestesico') {
      this.router.navigate(['/actividad/kinestesico']);
    }
    if (environment.tipo_estudiante === 'estudiante visual') {
      this.router.navigate(['/actividad/visual']);
    }
    if (environment.tipo_estudiante === 'estudiante auditivo') {
      this.router.navigate(['/actividad/auditivo']);
    }

  }

}
