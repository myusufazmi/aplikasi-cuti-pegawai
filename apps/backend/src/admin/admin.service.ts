import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import * as bcrypt from 'bcrypt';
import { LoginAdminDto } from './dto/login-admin.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) { }

  // CRUD: Create Admin
  async create(createAdminDto: CreateAdminDto): Promise<Admin> {
    const { password } = createAdminDto;
    const hashedPassword = await bcrypt.hash(password, 10); // Encrypt password
    const admin = this.adminRepository.create({
      ...createAdminDto,
      password: hashedPassword,
    });
    return await this.adminRepository.save(admin);
  }

  // CRUD: Get all Admin
  async findAll(): Promise<Admin[]> {
    return this.adminRepository.find();
  }

  // CRUD: Get Admin by ID
  async findOne(id: number): Promise<Admin> {
    return this.adminRepository.findOne({ where: { id } });
  }

  // CRUD: Update Admin
  async update(id: number, updateAdminDto: UpdateAdminDto): Promise<Admin> {
    const admin = await this.adminRepository.findOne({ where: { id } });
    if (updateAdminDto.password) {
      updateAdminDto.password = await bcrypt.hash(updateAdminDto.password, 10);
    }
    Object.assign(admin, updateAdminDto);
    return this.adminRepository.save(admin);
  }

  // CRUD: Delete Admin
  async remove(id: number): Promise<void> {
    await this.adminRepository.delete(id);
  }

  // Login
  async login(loginAdminDto: LoginAdminDto): Promise<string> {
    console.log('masuk login')
    const { email, password } = loginAdminDto;
    const admin = await this.adminRepository.findOne({ where: { email } });

    if (!admin) {
      throw new Error('Invalid email or password');
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      throw new Error('Invalid email or password');
    }

    // Return a simple JWT token or session ID (for simplicity, we'll use a dummy token or admin id)
    return admin.id.toString();
  }
}
