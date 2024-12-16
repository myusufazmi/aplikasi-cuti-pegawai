import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pegawai } from './pegawai.entity';
import { CreatePegawaiDto } from './dto/create-pegawai.dto';
import { UpdatePegawaiDto } from './dto/update-pegawai.dto';

@Injectable()
export class PegawaiService {
  constructor(
    @InjectRepository(Pegawai)
    private pegawaiRepository: Repository<Pegawai>,
  ) {}

  // CRUD: Create Pegawai
  async create(createPegawaiDto: CreatePegawaiDto): Promise<Pegawai> {
    const pegawai = this.pegawaiRepository.create(createPegawaiDto);
    return await this.pegawaiRepository.save(pegawai);
  }

  // CRUD: Get Pegawai by ID
  async findOne(id: number): Promise<Pegawai> {
    return this.pegawaiRepository.findOne({ where: { id } });
  }

  // CRUD: Get all Pegawai
  async findAll(): Promise<Pegawai[]> {
    return this.pegawaiRepository.find();
  }

  // CRUD: Update Pegawai
  async update(id: number, updatePegawaiDto: UpdatePegawaiDto): Promise<Pegawai> {
    const pegawai = await this.pegawaiRepository.findOne({where:{id}});
    Object.assign(pegawai, updatePegawaiDto);
    return this.pegawaiRepository.save(pegawai);
  }

  // CRUD: Delete Pegawai
  async remove(id: number): Promise<void> {
    await this.pegawaiRepository.delete(id);
  }
}
