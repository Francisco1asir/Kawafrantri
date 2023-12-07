import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateProveedoreDto } from './dto/create-proveedore.dto';
import { UpdateProveedoreDto } from './dto/update-proveedore.dto';
import { Proveedore } from './entities/proveedore.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProveedoresService {
    constructor(
      @InjectRepository(Proveedore)
      private readonly proveedorRepository: Repository<Proveedore>
    ) {}

    async create(createProveedoreDto: CreateProveedoreDto) {
      try {
        const proveedor = this.proveedorRepository.create(createProveedoreDto);
        await this.proveedorRepository.save(proveedor);
        return {
          msg: 'Registro insertado',
          data: proveedor,
          status: 200,
        };
      } catch (error) {
        throw new InternalServerErrorException('Ponte en contacto con el admin');
      }
    }

//LISTAR TODOS LOS PROVEEDORES

async findAll() {
    try {
      const catData = await this.proveedorRepository.find()
      return {
        data: catData,
        message: 'listado de todas las categorias',
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException("fallo al listar todas las categorias")
    }
  }



  findOne(id: number) {
    return `This action returns a #${id} proveedore`;
  }

  update(id: number, updateProveedoreDto: UpdateProveedoreDto) {
    return `This action updates a #${id} proveedore`;
  }

  remove(id: number) {
    return `This action removes a #${id} proveedore`;
  }
}
