import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {

  constructor(private readonly appService: AppService) {
    console.log('[AppController] - Constructor')
  }

  @Post('Usuario')
  Usuario(@Body() { usuario }: { usuario: string }): string {

    console.log('[AppController] - Usuario')
    return this.appService.getUsuario(usuario);

  }
}
