import { Injectable, Scope } from '@nestjs/common';
import { GlobalContextService } from './contexto/GlobalContext.service';

@Injectable()
// @Injectable()
export class AppService {

  constructor(private readonly globalContext: GlobalContextService) {
    console.log('[AppService] - Constructor')
  }

  getUsuario(usuario: string): string {

    let retorno = this.globalContext.usuarioGlobal

    this.globalContext.usuarioGlobal = usuario

    return retorno
  }

}
