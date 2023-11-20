import { Injectable } from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { UpdateReferenceDto } from './dto/update-reference.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { randomUUID } from 'crypto';

@Injectable()
export class ReferenceService {
  constructor(readonly prisma: PrismaService) {}
  create(createReferenceDto: CreateReferenceDto) {
    return this.prisma.reference.create({
      data: {
        id: randomUUID().toString(),
        title: createReferenceDto.title,
        rating: createReferenceDto.rating,
        comment: createReferenceDto.comment,
        candidate_id: createReferenceDto.candidateId,
        recruiter_id: createReferenceDto.recruiterId,
      },
    });
  }

  findFor(candidateId: string) {
    return this.prisma.reference.findMany({
      where: { candidate_id: candidateId },
      select: {
        title: true,
        rating: true,
        comment: true,
        recruiter_id: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.reference.findUnique({ where: { id } });
  }
}
