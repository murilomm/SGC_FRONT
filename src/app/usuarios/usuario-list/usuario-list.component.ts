import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  constructor(private service: UsuarioService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.atualizaLista();
  }

  populateForm(obj: Usuario) {
    this.service.formData = Object.assign({}, obj);
  }

  onDelete(id: number) {
    if (confirm('Deseja realmente remover?')) {
      this.service.remover(id).subscribe(res => {
        this.service.atualizaLista();
        this.toastr.warning('Removido com sucesso!', 'Usuários');
      });
    }
  }

}
