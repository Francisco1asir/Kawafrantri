import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MotosService } from './motos.service';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';

@Controller('motos')
export class MotosController {
  constructor(private readonly motosService: MotosService) {}

  @Post()
  create(@Body() createMotoDto: CreateMotoDto) {
    return this.motosService.create(createMotoDto);
  }

  @Get()
  findAll() {
    return this.motosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.motosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMotoDto: UpdateMotoDto) {
    return this.motosService.update(+id, updateMotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.motosService.remove(+id);
  }
}
