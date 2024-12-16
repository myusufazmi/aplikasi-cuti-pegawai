import { IsEmail, IsNotEmpty, MinLength, IsPhoneNumber } from 'class-validator';

export class CreatePegawaiDto {
  @IsNotEmpty()
  namaDepan: string;

  @IsNotEmpty()
  namaBelakang: string;

  @IsEmail()
  email: string;

  @IsPhoneNumber()
  noHp: string;

  @IsNotEmpty()
  alamat: string;

  @IsNotEmpty()
  jenisKelamin: string;
}
