
//decorator
import {Res} from "@nestjs/common/utils/decorators/route-params.decorator";
import {Get, Post} from "@nestjs/common/utils/decorators/request-mapping.decorator";
import {Controller, Req} from "@nestjs/common";
import {HttpCode} from "@nestjs/common/utils/decorators/http-code.decorator";

@Controller('Usuario')
export class UsuarioController {
    usuario = {
        nombre: 'Wilson',
        apellido: 'Ramos',
        edad: 21
    };
    usuarios = [];
    @Get('mostrar')
    mostrarUsuario(@Req() request,@Res() response ) {
        return response.send(this.usuario);
    }
    @Get('mostrarExpress')
    mostrarUsuarioExpress(@Req() request,@Res() response ){
        return response.status(200).send(this.usuarios);
    }

    @Post('crearUsuario')
    crearUsuario(@Req() request,@Res() response ){
        const nuevoUsuario= {
            nombre: request.query.nombre,
            apellido: request.query.apellido,
            edad: request.query.edad
        };
        this.usuarios.push(nuevoUsuario);
        return response.status(201).send(nuevoUsuario);
    }

}