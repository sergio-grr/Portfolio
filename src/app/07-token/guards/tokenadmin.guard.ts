import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verificar si el token de administrador está presente en el localStorage
    const token = localStorage.getItem('token');
    if (token === 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2wiOiIxIiwibmFtZSI6Ikp1YW4gUGVycmUiLCJpZF91c2VyIjoxMjMsImV4cCI6MTYyNTk3NTk5fQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c') {
      return true; // Permitir el acceso a la ruta 'admin' si el token de administrador está presente
    } else {
      // Redirigir al usuario a la página de inicio de sesión si no tiene el token de administrador
      this.router.navigate(['/token/log']);
      return false;
    }
  }
}
