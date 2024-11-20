import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { GrupoUsuarioInterface } from '../../interfaces/sistema/grupo.interfaces';

@Entity({ name: 'gruposusuarios' })
export default class GrupoUsuario implements GrupoUsuarioInterface {
    @PrimaryColumn({ length: 36 })
    idGrupo: string;

    @PrimaryColumn({ length: 36 })
    idUsuario: string;
}