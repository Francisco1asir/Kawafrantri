import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MotosModule } from './modules/motos/motos.module';
import { ClientesModule } from './modules/clientes/clientes.module';
import { CategoriasModule } from './modules/categorias/categorias.module';
import { UsuariosModule } from './modules/usuarios/usuarios.module';
import { ProveedoresModule } from './modules/proveedores/proveedores.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5438,
      database: 'Kawafrantri',
      username: 'kawa',
      password: 'kawa',
      autoLoadEntities: true,
      synchronize: true
    }),
    MotosModule, 
    ClientesModule, 
    CategoriasModule, 
    UsuariosModule, 
    ProveedoresModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
