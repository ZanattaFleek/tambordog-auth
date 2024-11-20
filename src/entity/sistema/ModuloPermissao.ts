import { ModuloPermissaoInterface } from '../../interfaces/sistema/modulo.interfaces';
import { Column, Entity, Generated, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'modulospermissoes' })
export default class ModuloPermissao implements ModuloPermissaoInterface {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    idModuloPermissao: string;

    @Column({ length: 36 })
    idModulo: string

    @Column({ length: 255 })
    permissao: string;
}