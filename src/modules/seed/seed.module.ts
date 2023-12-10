import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProveedoresModule } from '../proveedores/proveedores.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProveedoresModule]
})
export class SeedModule {}
