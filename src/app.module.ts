import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {UsuarioController} from "./usuario.controller";

@Module({
  imports: [],//otros modulos
  controllers: [AppController, UsuarioController], //Controladores
  components: [],
})
export class AppModule {

}
