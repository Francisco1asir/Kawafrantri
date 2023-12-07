import { IsString, MinLength } from "class-validator";

export class CreateProveedoreDto {
    @IsString()
    @MinLength(1)
    cif: string;

    @IsString()
    @MinLength(1)
    nombre: string;

    @IsString()
    @MinLength(1)
    localidad: string;

    @MinLength(9)
    telefono: number;
}
