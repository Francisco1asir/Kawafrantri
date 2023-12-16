import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PaginationDTO } from './dto/pagination.dto';

@Injectable()
export class ClientesService {
  Paginat(paginationDto: PaginationDTO) {
    throw new Error('Method not implemented.');
  }
  clienteRepository: any;
  UpdateProveedor(arg0: number, updateClienteDto: UpdateClienteDto) {
    throw new Error('Method not implemented.');
  }


  //LISTAR UN CLIENTE
  async ListarUno(dni: string) {
    try {
      const proveedor = await this.clienteRepository.findOne({
        where: { dni }
      })
      return {
        message: "detalles del proveedor",
        data: proveedor,
        status: 200
      }
    } catch (error) {
      throw new InternalServerErrorException('ERROR ._.')
    }
  }

  // INSERTAR PROVEEDORES

  async create(createProveedoreDto: CreateClienteDto) {
    try {
      const proveedor = this.clienteRepository.create(createProveedoreDto);
      await this.clienteRepository.save(proveedor);
      return {
        msg: 'Cliente insertado',
        data: proveedor,
        status: 200,
      };
    } catch (error) {
      throw new InternalServerErrorException('Ponte en contacto con el admin');
    }
  }



  findAll() {
    return `This action returns all clientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cliente`;
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }
}
