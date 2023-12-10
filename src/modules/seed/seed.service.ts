import { Injectable } from '@nestjs/common';
import { CreateSeedDto } from './dto/create-seed.dto';
import { UpdateSeedDto } from './dto/update-seed.dto';
import { ProveedoresService } from '../proveedores/proveedores.service';
import { Proveedore } from '../proveedores/entities/proveedore.entity';
import * as seedProveedore from './data/proveedores.json'

@Injectable()
export class SeedService {
  constructor(private readonly proveedoreService: ProveedoresService) {}

  public async loadData() {
    try {
      await this.insertNewAutores();
      return ('Seed ejecutado correctamente')
    } catch (error) {
      return ('Seed ejecutado mal pero mal')
    }
  }

  private async insertNewAutores() {
      // await this.proveedoreService.deleteAllProveedore();
      const insertPromisesProveedore = seedProveedore.map(async (proveedor: Proveedore) => {
        return await this.proveedoreService.create(proveedor);
      });
      await Promise.all(insertPromisesProveedore);
  }
}

