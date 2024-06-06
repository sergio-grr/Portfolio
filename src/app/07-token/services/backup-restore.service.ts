import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CharactersService } from './characters.service';

@Injectable({
  providedIn: 'root'
})
export class BackupRestoreService {

  private dataBaseUrl = 'assets/data/db.json'; // URL para el archivo de base de datos
  private backupUrl = 'assets/data/db-back.json'; // URL para el archivo de respaldo

  constructor(private http: HttpClient, private charactersService: CharactersService) { }

  getData(): Observable<any> {
    return this.http.get(this.dataBaseUrl);
  }

  getRestore(): Observable<any> {
    return this.http.get(this.backupUrl);
  }

  replaceData(dataBase: any, backup: any): Observable <any> {
    const newDataBase = dataBase; // Clonar la base de datos para evitar cambios inesperados
    newDataBase.fighters = backup.fighters;
    this.charactersService.getCharacters().subscribe(); // Obtener los nuevos datos del servicio CharactersService
    return of(newDataBase);
  }
}
