import { Injectable, Scope } from '@nestjs/common';

@Injectable({ scope: Scope.REQUEST })
export class RequestContextService {

    constructor() {
        console.log('[RequestContextService] - Constructor')
    }

    public usuarioRequest: string = 'Valor Inicial Usuário Request'

}