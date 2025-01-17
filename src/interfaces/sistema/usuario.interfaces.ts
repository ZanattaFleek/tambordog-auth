export interface UsuarioInterface {
    idUsuario?: string
    nome: string
    cpf: string
    senha: string
    ativo: boolean
    perfil: 'A' | 'U'
    tentativasLogin: number
}

export interface UsuarioSessaoInterface {
    idSessao?: string
    idUsuario: string
    token: string
    ativo: boolean
}

export interface UsuarioPermissaoInterface {
    idUsuarioPermissao: string
    idUsuario: string
    idModuloPermissao: string
}