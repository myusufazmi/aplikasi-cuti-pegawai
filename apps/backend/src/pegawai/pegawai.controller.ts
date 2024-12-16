import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { PegawaiService } from './pegawai.service';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';

@Controller('pegawai')
export class PegawaiController {
  constructor(private readonly pegawaiService: PegawaiService) {}

  @Post()
  async create(@Body() createPegawaiDto: CreatePegawaiDto) {
    return this.pegawaiService.create(createPegawaiDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.pegawaiService.findOne(+id);
  }

  @Get()
  async findAll() {
    return this.pegawaiService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePegawaiDto: UpdatePegawaiDto) {
    return this.pegawaiService.update(+id, updatePegawaiDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.pegawaiService.remove(+id);
  }
}
