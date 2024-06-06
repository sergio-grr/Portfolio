import { Component, OnInit } from '@angular/core';
import { BackupRestoreService } from '../../services/backup-restore.service';


@Component({
  selector: 'app-database-page',
  templateUrl: './database-page.component.html',
  styleUrls: ['./database-page.component.css']
})
export class DatabasePageComponent  {

  constructor(private backupRestoreService: BackupRestoreService) { }

  restoreDataBase(): void {

      this.backupRestoreService.restoreData();
    }
  }


