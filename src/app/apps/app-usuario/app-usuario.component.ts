import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatListOption } from "@angular/material";
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

  adicionaSelecionados(itens: MatListOption[]) {
    var index: number;
    var usuarios = itens.map(s => s.value);

    usuarios.forEach(usuario => {
      index = this.service.listaUsuariosDisponiveis.indexOf(usuario);
      
      this.service.listaUsuariosDisponiveis.splice(index, 1);      
      this.service.listaUsuariosSelecionados.push(usuario);  
    });
  }

  removeSelecionados(itens: MatListOption[]) {
    var index: number;
    var usuarios: Usuario[] = itens.map(s => s.value);

    usuarios.forEach(usuario => {
      index = this.service.listaUsuariosSelecionados.indexOf(usuario);      
      this.service.listaUsuariosSelecionados.splice(index, 1);
      
      this.service.listaUsuariosDisponiveis.push(usuario);
    });
  }

  salvarAlteracoes() {
    this.service.salvarSelecionados(this.appId).subscribe(res => {
      this.service.atualizaListas(this.appId);
    });

    this.service.salvarDisponiveis(this.appId).subscribe(res => {
      this.service.atualizaListas(this.appId);
    });

    this.toastr.success('Atualizado(s) com sucesso!', 'Apps - Usuários');
    this.dialogRef.close(this.form.value);
  }

  fechar() {
    this.dialogRef.close();
  }

}
