import { Component, OnInit } from '@angular/core';
import { TerceiroService } from 'src/app/services/terceiro.service';
import { ToastrService } from 'ngx-toastr';
import { Terceiro } from 'src/app/models/terceiro.model';

@Component({
  selector: 'app-terceiro-list',
  templateUrl: './terceiro-list.component.html',
  styleUrls: ['./terceiro-list.component.css']
})
export class TerceiroListComponent implements OnInit {

  constructor(private service: TerceiroService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.atualizaLista();
  }

  populateForm(obj: Terceiro) {
    this.service.formData = Object.assign({}, obj);
  }

  onDelete(id: number) {
    if (confirm('Deseja realmente remover?')) {
      this.service.remover(id).subscribe(res => {
        this.service.atualizaLista();
        this.toastr.warning('Removido com sucesso!', 'Terceiros');
      });
    }
  }

}
