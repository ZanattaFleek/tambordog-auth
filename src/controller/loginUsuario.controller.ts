import { Body, Controller, Post } from "@nestjs/common";
import ClsLoginUsuarioController from "./loginUsuario.controller.cls";
import { RespostaPadraoInterface } from "../interfaces/padrao.interfaces";

@Controller()
export class LoginUsuarioController {

    constructor() {
        console.log('[LoginUsuarioController] - Construtor')
     }

    @Post("loginUsuario")
    public loginUsuario(
        @Body("cpf") cpf: string,
        @Body("senha") senha: string
    ): Promise<RespostaPadraoInterface<String>> {

        return new ClsLoginUsuarioController().logar(cpf, senha)


    }

}