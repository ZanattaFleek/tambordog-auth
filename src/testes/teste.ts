import { PermissoesTypes } from "../types/PermissoesTypes";

Object.keys(PermissoesTypes).forEach((key) => {

    console.log(key, PermissoesTypes[key].MODULO);

    // console.log(PermissoesTypes[key].PERMISSOES);

    Object.keys(PermissoesTypes[key].PERMISSOES).forEach((keyPermissao) => {
        console.log(keyPermissao, PermissoesTypes[key].PERMISSOES[keyPermissao]);
    })

    /*

    onAlterarPermissao(PermissoesTypes[key].MODULO,PermissoesTypes[key].PERMISSOES[keyPermissao] )

    const onAlterarPermissao(modulo: string, permissao: string, permitir: boolean) {
    }


    const getPermissoes() {
    }

    */

})
