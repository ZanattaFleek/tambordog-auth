import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { RequestContextService } from 'src/contexto/RequestContext.service';

@Injectable()
export class AutenticacaoMiddleware implements NestMiddleware {

    constructor(private readonly requestContextService: RequestContextService) { }

    use(req: Request, res: Response, next: NextFunction) {

        console.log('[Autenticação Middleware] - ');

        console.log('[Autenticação Middleware] - req.body', req.body)

        this.requestContextService.usuarioRequest = 'Usuário Request Alterado no Middleware'

        next();

    }
}