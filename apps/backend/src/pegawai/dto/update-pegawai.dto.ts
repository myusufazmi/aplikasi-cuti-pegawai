import { IsEmail, IsOptional, MinLength, IsPhoneNumber } from 'class-validator';

export class UpdatePegawaiDto {
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
  noHp?: string;

  @IsOptional()
  alamat?: string;

  @IsOptional()
  jenisKelamin?: string;
}
