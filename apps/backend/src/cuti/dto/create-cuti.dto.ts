import { IsNotEmpty, IsDateString } from 'class-validator';

export class CreateCutiDto {
  @IsNotEmpty()
  alasanCuti: string;

  @IsDateString()
  tanggalMulai: string;

  @IsDateString()
  tanggalSelesai: string;

  @IsNotEmpty()
  pegawaiId: number;
}
