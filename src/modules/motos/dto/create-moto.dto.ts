import { IsNumber, IsOptional, IsString, MinLength  } from "class-validator";
import { Categoria } from "src/modules/categorias/entities/categoria.entity";
import { Cliente } from "src/modules/clientes/entities/cliente.entity";

export class CreateMotoDto {
    @IsString()
    @MinLength(2)
    matricula: string;

    @IsString()
    @MinLength(1)
    marca: string;

    @IsString()
    @MinLength(1)
    modelo: string;

    @IsNumber()
    cilindrada: number;
    
    @IsNumber()
    peso: number;

    @IsNumber()
    precio: number;

    @IsString()
    @IsOptional()
    dni_propietario?: Cliente;

    @IsString()
    @IsOptional()
    catid?: Categoria;
}
