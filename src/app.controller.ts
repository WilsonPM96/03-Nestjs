import {Get, Controller, Req} from '@nestjs/common';
import {Res} from "@nestjs/common/utils/decorators/route-params.decorator";
const fs = require("fs");
@Controller()  //decorators
export class AppController {
  @Get()
  root(@Req() request, @Res() response){
    console.log('1. Inicio');
    let contenidoHtml = '';
    console.log('2. contenidoHtml',  contenidoHtml);
    fs.readFile(__dirname + '/html/Index.html', 'utf8', (error, contenidoDelArchivo)=> {
        console.log('3. Respondio');
        const nombre = 'Wilson';
        if(error){
            console.log('4. Error', error);
            console.log('5. contenidoHtml', contenidoHtml);
            console.log('6. Termino');
            return response.send('Error alv');

        }
        else{
            console.log('4. contenidoHtml', contenidoHtml);
            console.log('5. contenidoHtml', contenidoHtml);
            console.log('6. Termino');
            contenidoHtml = contenidoDelArchivo;
            contenidoHtml = contenidoHtml.replace('{{nombre}}', nombre);
            return response.send(contenidoHtml);
        }


    });

  }
}
