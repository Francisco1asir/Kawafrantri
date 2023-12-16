import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Cliente {

    @PrimaryColumn('text',{
        nullable: false,
    }) 
    dni: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    nombre: string;

    @Column('text',{
        unique: false,
        nullable: true,
    })
    fnac: string;

    @Column({
        unique: false,
        nullable: true,
    })
    localidad: string;

    @Column({
        unique: false,
        nullable: true,
    })
    telefono: string;

}
