import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateReferenceDto } from './dto/create-reference.dto';
import { ReferenceService } from './reference.service';

@Controller('reference')
export class ReferenceController {
  constructor(private readonly referenceService: ReferenceService) {}

  @Post()
  create(@Body() createReferenceDto: CreateReferenceDto) {
    console.log(createReferenceDto);
    return this.referenceService.create(createReferenceDto);
  }

  @Get('/candidate/:id')
  findFor(@Param('id') id: string) {
    return this.referenceService.findFor(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.referenceService.findOne(id);
  }
}
