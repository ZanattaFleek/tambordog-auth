import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';
import { GrupoInterface } from '../../interfaces/sistema/grupo.interfaces';

@Entity({ name: 'grupos' })
export default class Grupo implements GrupoInterface {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    idGrupo: string;

    @Column({ length: 50 })
    nome: string
}