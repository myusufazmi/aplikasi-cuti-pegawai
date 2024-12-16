import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateAdminDto {
  @IsNotEmpty()
  namaDepan: string;

  @IsNotEmpty()
  namaBelakang: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  password: string;

  @IsNotEmpty()
  tanggalLahir: Date;

  @IsNotEmpty()
  jenisKelamin: string;
}
