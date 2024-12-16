import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { CutiService } from './cuti.service';
import { CreateCutiDto } from './dto/create-cuti.dto';
import { UpdateCutiDto } from './dto/update-cuti.dto';

@Controller('cuti')
export class CutiController {
  constructor(private readonly cutiService: CutiService) {}

  @Post()
  async create(@Body() createCutiDto: CreateCutiDto) {
    return this.cutiService.create(createCutiDto);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.cutiService.findOne(+id);
  }

  @Get('pegawai/:pegawaiId')
  async findAllByPegawai(@Param('pegawaiId') pegawaiId: string) {
    return this.cutiService.findAllByPegawai(+pegawaiId);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateCutiDto: UpdateCutiDto) {
    return this.cutiService.update(+id, updateCutiDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.cutiService.remove(+id);
  }
}
