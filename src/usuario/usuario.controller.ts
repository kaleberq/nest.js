import { Body, Controller, Post } from "@nestjs/common";
//teste
@Controller('users')
export class UsuarioController {
    private usuarios = [];

    @Post()
    public cria(@Body() usuario) {
        this.usuarios.push(usuario);

        return usuario;
    }
}