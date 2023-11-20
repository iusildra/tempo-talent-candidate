import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCandidateDto } from './dto/create-candidate.dto';
import { UpdateCandidateDto } from './dto/update-candidate.dto';

@Injectable()
export class CandidateService {
  constructor(readonly prisma: PrismaService) {}

  create(createCandidateDto: CreateCandidateDto) {
    return this.prisma.candidate.create({
      data: {
        id: randomUUID().toString(),
        first_name: createCandidateDto.firstName,
        last_name: createCandidateDto.lastName,
        gender_id: createCandidateDto.genderId,
        citizenship_id: createCandidateDto.citizenshipId,
        phone: createCandidateDto.phone,
        email: createCandidateDto.email,
        bio: createCandidateDto.bio,
        password: createCandidateDto.password,
        address_id: createCandidateDto.address,
      },
    });
  }

  findAll() {
    return this.prisma.candidate.findMany({
      select: {
        id: true,
        first_name: true,
        last_name: true,
        gender: { select: { name: true } },
        citizenship: { select: { name: true } },
        phone: true,
        email: true,
        bio: true,
        address_id: true,
        cv: true,
        photo: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.candidate.findUnique({
      where: { id },
      select: {
        id: true,
        first_name: true,
        last_name: true,
        gender: { select: { name: true } },
        citizenship: { select: { name: true } },
        phone: true,
        email: true,
        bio: true,
        address_id: true,
        cv: true,
        photo: true,
      },
    });
  }

  update(id: string, updateCandidateDto: UpdateCandidateDto) {
    const payload = {};
    updateCandidateDto.firstName &&
      (payload['first_name'] = updateCandidateDto.firstName);
    updateCandidateDto.lastName &&
      (payload['last_name'] = updateCandidateDto.lastName);
    updateCandidateDto.firstName &&
      (payload['gender_id'] = updateCandidateDto.genderId);
    updateCandidateDto.firstName &&
      (payload['citizenship_id'] = updateCandidateDto.citizenshipId);
    updateCandidateDto.lastName &&
      (payload['phone'] = updateCandidateDto.phone);
    updateCandidateDto.lastName &&
      (payload['email'] = updateCandidateDto.email);
    updateCandidateDto.lastName && (payload['bio'] = updateCandidateDto.bio);
    updateCandidateDto.lastName &&
      (payload['password'] = updateCandidateDto.password);
    updateCandidateDto.lastName &&
      (payload['address_id'] = updateCandidateDto.address);
    return this.prisma.candidate.update({
      where: { id },
      data: { ...payload },
    });
  }

  remove(id: string) {
    return this.prisma.candidate.delete({
      where: { id },
    });
  }
}
