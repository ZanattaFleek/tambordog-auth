
import { Injectable, CanActivate, ExecutionContext, Scope } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesInterface } from './roles.interfaces';
import { ROLES_KEY } from './roles.decorator';
import { GlobalContextService } from '../contexto/GlobalContext.service';
import { RequestContextService } from 'src/contexto/RequestContext.service';

@Injectable({scope: Scope.REQUEST})
export class RolesGuard implements CanActivate {
    constructor(
        private reflector: Reflector,
        private readonly globalContext: GlobalContextService,
        private readonly requestContext: RequestContextService,
    ) {
        console.log('[RolesGuard] - Construtor')
    }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<RolesInterface>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ])

        console.log('[RolesGuard] - Regra Recebida: ', requiredRoles)

        console.log('[RolesGuard] - Contexto Global Usuário: ', this.globalContext.usuarioGlobal)

        console.log('[RolesGuard] - Contexto Request Usuário: ', this.requestContext.usuarioRequest)

        if (!requiredRoles) {
            return true
        }

        // const { usuario } = context.switchToHttp().getRequest();

        return true

    }
}
