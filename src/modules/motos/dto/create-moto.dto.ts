import { IsNumber, IsOptional, IsString, MinLength  } from "class-validator";

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
    dni_propietario?: string;

    @IsString()
    @IsOptional()
    catid?: string;
}
