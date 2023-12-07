import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Proveedore {
    @PrimaryColumn('text',{
        nullable: false,
    }) 
    cif: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    nombre: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    localidad: string;

    @Column({
        unique: true,
        nullable: true,
    })
    telefono: number;

}
