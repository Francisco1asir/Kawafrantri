import { Module } from '@nestjs/common';
import { MotosService } from './motos.service';
import { MotosController } from './motos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moto } from './entities/moto.entity';

@Module({
  controllers: [MotosController],
  providers: [MotosService],
  imports: [
    TypeOrmModule.forFeature([Moto])
  ],
  exports: [MotosService, TypeOrmModule]
})
export class MotosModule {}
