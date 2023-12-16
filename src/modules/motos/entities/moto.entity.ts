import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Moto {
    @PrimaryColumn('text',{
        nullable: false,
    }) 
    matricula: string;

    @Column('text',{
        unique: true,
        nullable: true,
    })
    marca: string;

    @Column('text',{
        unique: false,
        nullable: true,
    })
    modelo: string;

    @Column({
        unique: false,
        nullable: true,
    })
    cilindrada: number;

    @Column({
        unique: false,
        nullable: true,
    })
    peso: number;

    @Column({
        unique: false,
        nullable: true,
    })
    precio: number;

    @Column({
        unique: false,
        nullable: true,
    })
    dni_propietario?: string;

    @Column({
        unique: false,
        nullable: true,
    })
    catid?: string;
}

