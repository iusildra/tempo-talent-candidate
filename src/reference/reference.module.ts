import { Module } from '@nestjs/common';
import { ReferenceService } from './reference.service';
import { ReferenceController } from './reference.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ReferenceController],
  providers: [ReferenceService, PrismaService],
})
export class ReferenceModule {}
