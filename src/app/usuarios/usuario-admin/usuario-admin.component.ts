import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-admin',
  templateUrl: './usuario-admin.component.html',
  styleUrls: ['./usuario-admin.component.css']
})
export class UsuarioAdminComponent implements OnInit {

  constructor(private router:Router, 
    private service : UsuarioService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm() {
    // if (form != null)
    //   form.resetForm();
    this.service.formData = {
      id: 0,
      Status: true,
      DataCadastro: null,
      DataAlteracao: null,
      UsuarioCadastro: null,
      UsuarioAlteracao: null,
      Nome: '',
      Sobrenome: '',
      Idade: 0,
      TipoDocumento: '',
      Documento: '',
      Filiacao: '',
      Genero: '',
      Administrador: false,
    }
  }

  onSubmit(form: NgForm) {
    if (form.value.id == 0 || form.value.id == null)
    {
      form.value.id = 0;
      this.insertRecord(form);
    }else{
      this.updateRecord(form);
    }
  }

  insertRecord(form: NgForm) {
    this.service.adicionar(form.value).subscribe(res => {
      this.toastr.success('Adicionado com sucesso', 'Usuários');
      this.resetForm();
      this.service.atualizaLista();
    });
  }

  updateRecord(form: NgForm) {
    this.service.atualizar(form.value).subscribe(res => {
      this.toastr.info('Atualizado com sucesso', 'Usuários');
      this.resetForm();
      this.service.atualizaLista();
    });

  }

}
