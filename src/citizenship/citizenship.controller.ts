import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitizenshipService } from './citizenship.service';
import { CreateCitizenshipDto } from './dto/create-citizenship.dto';
import { UpdateCitizenshipDto } from './dto/update-citizenship.dto';

@Controller('citizenship')
export class CitizenshipController {
  constructor(private readonly citizenshipService: CitizenshipService) {}

  @Post()
  create(@Body() createCitizenshipDto: CreateCitizenshipDto) {
    return this.citizenshipService.create(createCitizenshipDto);
  }

  @Get()
  findAll() {
    return this.citizenshipService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.citizenshipService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCitizenshipDto: UpdateCitizenshipDto) {
    return this.citizenshipService.update(id, updateCitizenshipDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.citizenshipService.remove(id);
  }
}
