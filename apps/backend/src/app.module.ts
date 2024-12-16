import { Module, OnModuleInit } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './admin/admin.entity';
import { Pegawai } from './pegawai/pegawai.entity';
import { Cuti } from './cuti/cuti.entity';
import { PegawaiModule } from './pegawai/pegawai.module';
import { AdminModule } from './admin/admin.module';
import { CutiModule } from './cuti/cuti.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'leave_management',
      entities: [Admin, Pegawai, Cuti],
      synchronize: true,
    }),
    AdminModule,
    PegawaiModule,
    CutiModule,
  ]
})
export class AppModule { }
