import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { ProveedoresService } from '../proveedores/proveedores.service';
import { Proveedore } from '../proveedores/entities/proveedore.entity';
import * as seedProveedore from './data/proveedores.json'
import * as seedMoto from './data/motos.json'
import * as seedCliente from './data/clientes.json'
import { MotosService } from '../motos/motos.service';
import { Moto } from '../motos/entities/moto.entity';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from '../clientes/entities/cliente.entity';

@Injectable()
export class SeedService {
  constructor(
    private readonly proveedoreService: ProveedoresService,
    private readonly motosService: MotosService,
    private readonly clientesService: ClientesService
    ) {}

  public async loadData() {
    try {
      this.clientesService.deleteAllClientes();
      this.proveedoreService.deleteAllProveedore();
      this.motosService.deleteAllMotos();
      this.insertNewProveedores();
      this.insertNewClientes();
      // await this.insertNewMotos();
      return ('Seed ejecutado correctamente')
    } catch (error) {
      return ('Seed ejecutado mal pero mal')
    }
  }

  private async insertNewProveedores() {
      await this.proveedoreService.deleteAllProveedore();
      const insertPromisesProveedore = seedProveedore.map(async (proveedor: Proveedore) => {
        return await this.proveedoreService.create(proveedor);
      });
      await Promise.all(insertPromisesProveedore);
  }

//   private async insertNewMotos() {
//     await this.motosService.deleteAllMotos();
//     const insertPromisesMoto = seedMoto.map(async (moto: Moto) => {
//       return await this.motosService.create(moto);
//     });
//     await Promise.all(insertPromisesMoto);
// }

  private async insertNewClientes() {
    await this.clientesService.deleteAllClientes();
    const insertPromisesCliente = seedCliente.map(async (cliente: Cliente) => {
      return await this.clientesService.create(cliente);
    });
    await Promise.all(insertPromisesCliente);
  }
}

