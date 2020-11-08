import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgModel} from '@angular/forms';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  estudiante: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    environment.tipo_estudiante = this.estudiante;
    this.router.navigate(['/inicio']);
  }

}
