import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotosModule } from './modules/motos/motos.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ProveedoresModule } from './modules/proveedores/proveedores.module';

@Module({
  imports: [MotosModule, ClientesModule, CategoriasModule, UsuariosModule, ProveedoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
