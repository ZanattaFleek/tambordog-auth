import { LessThan } from "typeorm";
import Usuario from "../entity/sistema/Usuario";
import UsuarioSessao from "../entity/sistema/UsuarioSessao";

import { v4 as uuidv4 } from 'uuid';
import { RespostaPadraoInterface } from "../interfaces/padrao.interfaces";
import { AppDataSource } from "../entity/dataSource";

export default class ClsLoginUsuarioController {

    public logar(cpf: string, senha: string): Promise<RespostaPadraoInterface<String>> {

        let retorno: RespostaPadraoInterface<String> = {
            ok: false,
            mensagem: 'Erro no Login',
            dados: ''
        }

        return this.fecharSessoesEmAberto(cpf).then((rsUsuarioExistente) => {
            if (rsUsuarioExistente) {

                return AppDataSource.getRepository(Usuario).findOne({ where: { cpf: cpf, senha: senha, tentativasLogin: LessThan(4) } }).then((rsUsuarioLogado) => {

                    if (rsUsuarioLogado) {

                        const token: string = uuidv4()

                        return AppDataSource.getRepository(Usuario).update({ idUsuario: rsUsuarioLogado.idUsuario }, { tentativasLogin: 0 }).then(() => {

                            return AppDataSource.getRepository(UsuarioSessao).save({
                                idUsuario: rsUsuarioLogado.idUsuario,
                                ativo: true,
                                token: token
                            }).then(() => {
                                // return AppDataSource.destroy().then(() => {
                                retorno.ok = true
                                retorno.mensagem = 'Login Realizado'
                                retorno.dados = token
                                return retorno
                                // })
                            })

                        })

                    } else {

                        return AppDataSource.getRepository(Usuario).update({ cpf: cpf }, { tentativasLogin: () => "tentativasLogin + 1" }).then(() => {
                            return retorno
                        })

                    }

                })

            } else {
                return retorno
            }
        })

    }

    private fecharSessoesEmAberto(cpf: string): Promise<boolean> {

        return AppDataSource.getRepository(Usuario).findOne({ where: { cpf: cpf } }).then((rsUsuarioExistente) => {

            if (rsUsuarioExistente) {

                return AppDataSource.getRepository(UsuarioSessao).update({ idUsuario: rsUsuarioExistente.idUsuario }, { ativo: false }).then(() => {
                    return true
                })

            } else {

                return false

            }

        })
    }
}