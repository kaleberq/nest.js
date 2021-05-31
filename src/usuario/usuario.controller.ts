import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { Usuario } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";
//teste
@Controller('users')
export class UsuarioController {
    //private usuarios = [];
    //private usuarioService = new UsuarioService();

    constructor(private usuarioService: UsuarioService){
        
    }

    @Get(':nomeDoUsuario')
    public buscaPorNomeDeUsuario(@Param('nomeDoUsuario') nomeDeUsuario: string){
        const usuarioEncontrado = this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);
        return usuarioEncontrado;
    }

    @Post()
    public cria(@Body() usuario: Usuario): Usuario {
        const usuarioCriado = this.usuarioService.cria(usuario);

        return usuarioCriado;
    }
}