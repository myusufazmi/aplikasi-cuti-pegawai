import { IsOptional, IsDateString } from 'class-validator';

export class UpdateCutiDto {
  @IsOptional()
  alasanCuti?: string;

  @IsOptional()
  @IsDateString()
  tanggalMulai?: string;

  @IsOptional()
  @IsDateString()
  tanggalSelesai?: string;
}
