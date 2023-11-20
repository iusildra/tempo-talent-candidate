import { Injectable } from '@nestjs/common';
import { CreateCitizenshipDto } from './dto/create-citizenship.dto';
import { UpdateCitizenshipDto } from './dto/update-citizenship.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CitizenshipService {
  constructor(private readonly prisma: PrismaService) {}
  create(createCitizenshipDto: CreateCitizenshipDto) {
    return this.prisma.citizenship.create({
      data: { name: createCitizenshipDto.name },
    });
  }

  findAll() {
    return this.prisma.citizenship.findMany();
  }

  findOne(id: number) {
    return this.prisma.citizenship.findUnique({ where: { id } });
  }

  update(id: number, updateCitizenshipDto: UpdateCitizenshipDto) {
    return this.prisma.citizenship.update({
      where: { id },
      data: { name: updateCitizenshipDto.name },
    });
  }

  remove(id: number) {
    return this.prisma.citizenship.delete({ where: { id } });
  }
}
