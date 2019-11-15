import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-app-admin',
  templateUrl: './app-admin.component.html',
  styleUrls: ['./app-admin.component.css']
})
export class AppAdminComponent implements OnInit {

  constructor(private router:Router, 
    private service : AppService,
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
      Tipo: '',
      Descricao: ''
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
      this.toastr.success('Adicionado com sucesso', 'Apps');
      this.resetForm();
      this.service.atualizaLista();
    });
  }

  updateRecord(form: NgForm) {
    this.service.atualizar(form.value).subscribe(res => {
      this.toastr.info('Atualizado com sucesso', 'Apps');
      this.resetForm();
      this.service.atualizaLista();
    });

  }

}
