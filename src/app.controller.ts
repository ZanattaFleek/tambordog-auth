import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Roles } from './auth/roles.decorator';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {
    console.log('[AppController] - Constructor')
  }

  @Post('Usuario')
  @Roles({ modulo: 'Cadastro de Usuário', permissao: 'Consultar Usuário' })
  Usuario(@Body() { usuario }: { usuario: string }): Record<string, string> {

    console.log('[AppController] - Usuario')
    return this.appService.getUsuario(usuario);

  }
}
