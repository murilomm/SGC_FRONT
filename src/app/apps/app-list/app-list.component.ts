import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { ToastrService } from 'ngx-toastr';
import { App } from 'src/app/models/app.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AppUsuarioComponent } from '../app-usuario/app-usuario.component';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  constructor(private service: AppService,
    private toastr: ToastrService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.service.atualizaLista();
  }

  populateForm(obj: App) {
    this.service.formData = Object.assign({}, obj);
  }

  onDelete(id: number) {
    if (confirm('Deseja realmente remover?')) {
      this.service.remover(id).subscribe(res => {
        this.service.atualizaLista();
        this.toastr.warning('Removido com sucesso!', 'Apps');
      });
    }
  }

  openDialog(appId : number) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.minWidth = 1000;
    dialogConfig.minHeight = 500;

    dialogConfig.data = {
        appId: appId,
        title: 'Apps | Usuários'
    };

    this.dialog.open(AppUsuarioComponent, dialogConfig);
  }

}
