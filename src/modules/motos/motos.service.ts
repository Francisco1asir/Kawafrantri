import { Injectable } from '@nestjs/common';
import { CreateMotoDto } from './dto/create-moto.dto';
import { UpdateMotoDto } from './dto/update-moto.dto';

@Injectable()
export class MotosService {
  create(createMotoDto: CreateMotoDto) {
    return 'This action adds a new moto';
  }

  findAll() {
    return `This action returns all motos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moto`;
  }

  update(id: number, updateMotoDto: UpdateMotoDto) {
    return `This action updates a #${id} moto`;
  }

  remove(id: number) {
    return `This action removes a #${id} moto`;
  }
}
