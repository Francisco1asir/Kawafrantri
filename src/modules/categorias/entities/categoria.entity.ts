import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Categoria {
    
    @PrimaryColumn('text',{
        nullable: false,
    }) 
    catid: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    nombre: string;

    @Column('text',{
        unique: false,
        nullable: true,
    })
    desc: string;
}
