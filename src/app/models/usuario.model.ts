import { Generica } from './generica.model';

export class Usuario extends Generica {
    Nome : string;
    Sobrenome : string;
    Idade : number;
    Documento : string;
    TipoDocumento : string;
    // UsuarioEndereco : any;
    // UsuarioContato : any;
    // UsuarioEmail : any;
    Filiacao : string;
    Genero : string;
    Administrador : boolean;
}
