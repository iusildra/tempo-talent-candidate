import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CitizenshipController } from './citizenship.controller';
import { CitizenshipService } from './citizenship.service';

@Module({
  controllers: [CitizenshipController],
  providers: [CitizenshipService, PrismaService],
})
export class CitizenshipModule {}
