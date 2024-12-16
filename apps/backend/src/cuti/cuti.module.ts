import { Module } from '@nestjs/common';
import { CutiController } from './cuti.controller';
import { CutiService } from './cuti.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cuti } from './cuti.entity';
import { Pegawai } from '../pegawai/pegawai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Cuti, Pegawai])],
  controllers: [CutiController],
  providers: [CutiService],
})
export class CutiModule {}
