import { Module } from '@nestjs/common';
import { PegawaiController } from './pegawai.controller';
import { PegawaiService } from './pegawai.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pegawai } from './pegawai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pegawai])],
  controllers: [PegawaiController],
  providers: [PegawaiService],
})
export class PegawaiModule {}
