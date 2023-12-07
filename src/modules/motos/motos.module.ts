import { Module } from '@nestjs/common';
import { MotosService } from './motos.service';
import { MotosController } from './motos.controller';

@Module({
  controllers: [MotosController],
  providers: [MotosService],
})
export class MotosModule {}
