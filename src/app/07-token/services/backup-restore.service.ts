import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackupRestoreService {

  private backup = './../data/db-back.json'
  private database = './../data/db.json'


constructor( private http: HttpClient) { }


  getData(): Observable< any > {
    return this.http.get(this.backup);
  }

  saveData( data: any): Observable< any >{

    return this.http.post(this.database, data)
    .pipe(
      tap(() => console.log('Data saved successfully!'))
    );
  }


  restoreData(): void {
    this.getData().subscribe( data => {
      this.saveData(data).subscribe();
    })
  }

}
