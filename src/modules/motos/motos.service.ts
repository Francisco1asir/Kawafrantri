import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Moto } from './entities/moto.entity';
import { Repository } from 'typeorm';
import { ClientesService } from '../clientes/clientes.service';
import { CategoriasService } from '../categorias/categorias.service';

@Injectable()
export class MotosService {
  constructor(
    @InjectRepository(Moto)
    private readonly motoRepository: Repository<Moto>,
    private clienteService:ClientesService,
    private categoriasService:CategoriasService
  ) {}

  async create(createMotoDto:CreateMotoDto) {
    try{
      const { dni_propietario, catid, ...campos } = createMotoDto;        
      const cate = this.motoRepository.create({ ...campos });
      const proveobj = await this.clienteService.findOne(dni_propietario.dni); 
      const proveobj2 = await this.categoriasService.findOne(catid.catid); 
      cate.dni_propietario = proveobj;
      cate.catid = proveobj2;
  
    await this.motoRepository.save(cate)
  
      return {
        status: 200,
        msg: 'Registro insertado'
      }
    }catch(error){
      console.log(error)
      throw new InternalServerErrorException('sysadmin...');
    }
  }
  

  // INSERTAR PROVEEDORES

  // async create(createMotoDto: CreateMotoDto) {
  //   try {
  //     const moto = this.motoRepository.create(createMotoDto);
  //     await this.motoRepository.save(moto);
  //     return {
  //       msg: 'Registro insertado',
  //       data: moto,
  //       status: 200,
  //     };
  //   } catch (error) {
  //     throw new InternalServerErrorException('Ponte en contacto con el admin');
  //   }
  // }


  // LISTAR TODOS LOS PROVEEDORES

  async findAll() {
    try {
      const catData = await this.motoRepository.find()
      return {
        data: catData,
        message: 'listado de todas las motos',
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException("fallo al listar todos los proveedores")
    }
  }

  //  LISTAR UN PROVEEDOR

  async ListarUno(matricula: string) {
    try {
      const moto = await this.motoRepository.findOne({
        where: { matricula }
      })
      return {
        message: "detalles de la moto",
        data: moto,
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException('ERROR ._.')
    }
  }


  //  MODIFICAR PROVEEDORES

  async UpdateProveedor(matricula: string, updateMotoDto: UpdateMotoDto) {
    try {
      const moto2 = await this.motoRepository.findOne({
        where: { matricula }
      })
      this.motoRepository.merge(moto2, updateMotoDto)
      await this.motoRepository.save(moto2)
      return {
        message: 'moto actualizada',
        data: moto2,
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException('fallo al actualizar proveedor')
    }
  }

  // BORRAR PROVEEDOR

  async remove(matricula: string) {
    try {
      const prove = await this.motoRepository.findOneBy({ matricula });
      if (!prove) {
        throw new NotFoundException(`Proveedor ${matricula} no encontrado`);
      }
      return await this.motoRepository.remove(prove);
    } catch (error) {
      throw new InternalServerErrorException('fallo al borrar proveedor')
    }
  }

    // BORRAR TODOS LOS PROVEEDORES
  async deleteAllMotos() {
    const query = this.motoRepository.createQueryBuilder('moto');
    try {
      return await query
        .delete()
        .where({})
        .execute()
    } catch (error) {
      throw new InternalServerErrorException('Ponte en contacto con el administrador ...')
    }
  }

}
