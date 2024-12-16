import { IsEmail, IsOptional, MinLength } from 'class-validator';

export class UpdateAdminDto {
  @IsOptional()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  namaDepan?: string;

  @IsOptional()
  namaBelakang?: string;

  @IsOptional()
  tanggalLahir?: Date;

  @IsOptional()
  jenisKelamin?: string;
}
