import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { GrupoPermissaoInterface } from '../../interfaces/sistema/grupo.interfaces';

@Entity({ name: 'grupospermissoes' })
export default class GrupoPermissao implements GrupoPermissaoInterface {

    @PrimaryGeneratedColumn('uuid')
    idGrupoPermissao: string

    @Column({ length: 36 })
    idGrupo: string;

    @Column({ length: 255 })
    modulo: string

    @Column({ length: 255 })
    permissao: string
    
}