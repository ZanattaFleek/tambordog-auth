import { ModuloInterface } from '../../interfaces/sistema/modulo.interfaces';
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'modulos' })
export default class Modulo implements ModuloInterface {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    idModulo: string;

    @Column({ length: 255 })
    modulo: string
}