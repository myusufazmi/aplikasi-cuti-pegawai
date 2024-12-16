import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cuti } from './cuti.entity';
import { CreateCutiDto } from './dto/create-cuti.dto';
import { UpdateCutiDto } from './dto/update-cuti.dto';
import { Pegawai } from '../pegawai/pegawai.entity';

@Injectable()
export class CutiService {
  constructor(
    @InjectRepository(Cuti)
    private cutiRepository: Repository<Cuti>,
    @InjectRepository(Pegawai)
    private pegawaiRepository: Repository<Pegawai>,
  ) {}

  // CRUD: Create Cuti
  async create(createCutiDto: CreateCutiDto): Promise<Cuti> {
    const { pegawaiId, tanggalMulai, tanggalSelesai } = createCutiDto;
    
    // Validasi jumlah cuti dalam setahun dan dalam sebulan
    const pegawai = await this.pegawaiRepository.findOne({where: {id: pegawaiId}});
    if (!pegawai) {
      throw new Error('Pegawai tidak ditemukan');
    }

    // Validasi: Cuti 12 hari per tahun
    const cutiInThisYear = await this.cutiRepository
      .createQueryBuilder('cuti')
      .where('cuti.pegawaiId = :pegawaiId', { pegawaiId })
      .andWhere('YEAR(cuti.tanggalMulai) = YEAR(:tanggalMulai)', { tanggalMulai })
      .getCount();

    if (cutiInThisYear >= 12) {
      throw new Error('Pegawai sudah menggunakan maksimal 12 hari cuti dalam setahun');
    }

    // Validasi: Cuti hanya bisa 1 hari dalam sebulan
    const cutiInThisMonth = await this.cutiRepository
      .createQueryBuilder('cuti')
      .where('cuti.pegawaiId = :pegawaiId', { pegawaiId })
      .andWhere('MONTH(cuti.tanggalMulai) = MONTH(:tanggalMulai)', { tanggalMulai })
      .getCount();

    if (cutiInThisMonth >= 1) {
      throw new Error('Pegawai hanya bisa mengambil 1 hari cuti dalam bulan yang sama');
    }

    const cuti = this.cutiRepository.create(createCutiDto);
    return await this.cutiRepository.save(cuti);
  }

  // CRUD: Get Cuti by ID
  async findOne(id: number): Promise<Cuti> {
    return this.cutiRepository.findOne({where:{id}});
  }

  // CRUD: Get all Cuti by Pegawai ID
  async findAllByPegawai(pegawaiId: number): Promise<Cuti[]> {
    return this.cutiRepository.find({ where: { pegawaiId } });
  }

  // CRUD: Update Cuti
  async update(id: number, updateCutiDto: UpdateCutiDto): Promise<Cuti> {
    const cuti = await this.cutiRepository.findOne({where:{id}});
    if (!cuti) {
      throw new Error('Cuti tidak ditemukan');
    }

    Object.assign(cuti, updateCutiDto);
    return this.cutiRepository.save(cuti);
  }

  // CRUD: Delete Cuti
  async remove(id: number): Promise<void> {
    await this.cutiRepository.delete(id);
  }
}
