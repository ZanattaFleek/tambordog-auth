import { Body, Controller, Post } from "@nestjs/common";
import { RespostaPadraoInterface } from "../interfaces/padrao.interfaces";

@Controller()
export class SomarController {

    constructor() {
        console.log('[SomarController] - Construtor')
     }

    @Post("jacare")
    public somar(
        @Body("numero01") numero01: number,
        @Body("numero02") numero02: number
    ): Promise<RespostaPadraoInterface<number>> {

        return Promise.resolve({ ok: true, mensagem: 'Soma OK', dados: numero01 + numero02 })


    }

}