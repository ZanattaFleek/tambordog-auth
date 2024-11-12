
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RolesInterface } from './roles.interfaces';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<RolesInterface>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ])

        console.log('[RolesGuard] - Regra Recebida: ', requiredRoles)

        if (!requiredRoles) {
            return true
        }

        // const { usuario } = context.switchToHttp().getRequest();

        return true

    }
}
