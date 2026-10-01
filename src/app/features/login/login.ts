import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
type ModoAcceso = 'login' | 'registro';
@Component({
 selector: 'app-login',
 standalone: true,
 imports: [CommonModule],
 templateUrl: './login.component.html',
 styleUrl: './login.component.css'
})
export class LoginComponent {
 modo: ModoAcceso = 'login';
 cambiarModo(nuevoModo: ModoAcceso): void {
 this.modo = nuevoModo;
 }
}
