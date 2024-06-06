import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    // Verificar si el acceso de administrador está almacenado en localStorage
    const adminAccess = localStorage.getItem('adminAccess');
    if (adminAccess === 'true') {
      return true; // Permitir el acceso a la ruta 'admin' si adminAccess es true
    } else {
      // Redirigir al usuario a la página de inicio de sesión si no tiene acceso de administrador
      this.router.navigate(['/token/log']);
      return false;
    }
  }
}
