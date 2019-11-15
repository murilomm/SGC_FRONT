import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder } from '@angular/forms';
import { ngModuleJitUrl } from '@angular/compiler';
import { Usuario } from 'src/app/models/usuario.model';
import { ToastrService } from 'ngx-toastr';
import { AppUsuarioService } from 'src/app/services/app-usuario.service';

@Component({
  selector: 'app-app-usuario',
  templateUrl: './app-usuario.component.html',
  styleUrls: ['./app-usuario.component.css']
})
export class AppUsuarioComponent implements OnInit {

  form: FormGroup;
  title: string;
  appId: number;

  constructor(
    private service: AppUsuarioService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<AppUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) data) { 

        this.appId = data.appId;
        this.title = data.title;

        this.form = new FormGroup({
          // firstName: new FormControl()
       });
  }

  ngOnInit() {
    this.service.atualizaListas(this.appId);
  }

  save() {
    this.dialogRef.close(this.form.value);
  }

  close() {
    this.dialogRef.close();
  }

}
