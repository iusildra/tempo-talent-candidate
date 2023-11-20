import { Injectable } from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenderService {
  constructor(private readonly prisma: PrismaService) {}
  create(createGenderDto: CreateGenderDto) {
    return this.prisma.gender.create({
      data: { name: createGenderDto.name },
    });
  }

  findAll() {
    return this.prisma.gender.findMany();
  }

  findOne(id: number) {
    return this.prisma.gender.findUnique({ where: { id } });
  }

  update(id: number, updateGenderDto: UpdateGenderDto) {
    return this.prisma.gender.update({
      where: { id },
      data: { name: updateGenderDto.name },
    });
  }

  remove(id: number) {
    return this.prisma.gender.delete({ where: { id } });
  }
}
