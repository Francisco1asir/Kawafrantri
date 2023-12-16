import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { ProveedoresService } from '../proveedores/proveedores.service';
import { Proveedore } from '../proveedores/entities/proveedore.entity';
import * as seedProveedore from './data/proveedores.json'
import * as seedMoto from './data/motos.json'
import * as seedCliente from './data/clientes.json'
import * as seedUsuario from './data/usuarios.json'
import * as seedCategoria from './data/categorias.json'
import { MotosService } from '../motos/motos.service';
import { Moto } from '../motos/entities/moto.entity';
import { ClientesService } from '../clientes/clientes.service';
import { Cliente } from '../clientes/entities/cliente.entity';
import { UsuariosService } from '../usuarios/usuarios.service';
import { Usuario } from '../usuarios/entities/usuario.entity';
import { CategoriasService } from '../categorias/categorias.service';
import { Categoria } from '../categorias/entities/categoria.entity';

@Injectable()
export class SeedService {
  constructor(
    private readonly proveedoreService: ProveedoresService,
    private readonly motosService: MotosService,
    private readonly clientesService: ClientesService,
    private readonly usuariosService: UsuariosService,
    private readonly categoriasService: CategoriasService
    ) {}

  public async loadData() {
    try {
      await this.insertNewProveedores();
      // await this.insertNewMotos();
      await this.insertNewClientes();
      await this.insertNewCategorias();
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

  private async insertNewUsuarios() {
    // await this.clientesService.deleteAllUsuarios();
    const insertPromisesUsuario = seedUsuario.map(async (usuario: Usuario) => {
      return await this.usuariosService.create(usuario);
    });
    await Promise.all(insertPromisesUsuario);
  }

  private async insertNewCategorias() {
    // await this.clientesService.deleteAllCategorias();
    const insertPromisesCategorias = seedCategoria.map(async (categoria: Categoria) => {
      return await this.categoriasService.create(categoria);
    });
    await Promise.all(insertPromisesCategorias);
  }
}

