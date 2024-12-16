import 'reflect-metadata'; // Import untuk TypeORM

import { NestFactory } from '@nestjs/core';
import { AdminService } from '../admin/admin.service';
import { CreateAdminDto } from '../admin/dto/create-admin.dto';
import { AppModule } from '../app.module';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const adminService = app.get(AdminService);

  // Seed Admin
  const adminDto: CreateAdminDto = {
    namaDepan: 'Admin',
    namaBelakang: 'User',
    email: 'admin@gmail.com',
    password: 'admin123',
    tanggalLahir: new Date('1990-01-01'),
    jenisKelamin: 'L',
  };

  const admin = await adminService.create(adminDto);
  console.log('Admin seeded:', admin);



  await app.close();
}

bootstrap();
