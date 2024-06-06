import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackupRestoreService } from '../../services/backup-restore.service';
import { CharactersService } from '../../services/characters.service';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.css']
})
export class DatabasePageComponent implements OnInit, OnDestroy {

  dataBase: any;
  backup: any;
  private subscriptions: Subscription[] = [];

  constructor(
    private backupRestoreService: BackupRestoreService,
    private charactersService: CharactersService
  ) { }

  ngOnInit(): void {
    this.loadOriginalData();
    this.loadNewData();
  }

  ngOnDestroy(): void {
    // Limpiar suscripciones
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadOriginalData(): void {
    const sub = this.backupRestoreService.getData().subscribe(
      data => {
        console.log('Datos originales cargados:', data);
        this.dataBase = data;
      },
      error => Swal.fire({
        title: 'Error',
        text: 'No se pudo cargar la base de datos original',
        icon: 'error'
      })
    );
    this.subscriptions.push(sub);
  }

  loadNewData(): void {
    const sub = this.backupRestoreService.getRestore().subscribe(
      data => {
        console.log('Datos de respaldo cargados:', data);
        this.backup = data;
      },
      error => Swal.fire({
        title: 'Error',
        text: 'No se pudo cargar los datos de respaldo',
        icon: 'error'
      })
    );
    this.subscriptions.push(sub);
  }

  replaceData(): void {
    if (this.dataBase && this.backup) {
      console.log('Reemplazando datos...',);
      // Reemplazar los datos en el servicio BackupRestoreService
      this.backupRestoreService.replaceData(this.dataBase, this.backup);
      console.log('datos del restore service:',this.dataBase);


      // Obtener los nuevos datos del servicio CharactersService
      const sub = this.charactersService.getCharacters().subscribe(
        newData => {
          console.log('Nuevos datos cargados:', this.backup);
          // Actualizar los datos en la vista
          this.dataBase = this.backup;
          Swal.fire({
            title: "Datos restaurados",
            text: "Los datos han sido reemplazados con éxito",
            icon: "success"
          });
        },
        error => Swal.fire({
          title: "Error",
          text: "No se pudieron obtener los nuevos datos",
          icon: "error"
        })
      );
      this.subscriptions.push(sub);
    } else {
      Swal.fire({
        title: "Error",
        text: "No se pudieron reemplazar los datos. Asegúrate de que ambos conjuntos de datos estén cargados.",
        icon: "error"
      });
    }
  }
}
