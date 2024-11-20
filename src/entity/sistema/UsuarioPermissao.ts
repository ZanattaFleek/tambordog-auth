import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioPermissaoInterface } from '../../interfaces/sistema/usuario.interfaces';

@Entity({ name: 'usuariospermissoes' })
export default class UsuarioPermissao implements UsuarioPermissaoInterface {

    @PrimaryGeneratedColumn('uuid')
    idUsuarioPermissao: string

    @Column({ length: 36 })
    idUsuario: string;

    @Column({ length: 255 })
    modulo: string

    @Column({ length: 255 })
    permissao: string
}