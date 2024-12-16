import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pegawai } from '../pegawai/pegawai.entity';

@Entity()
export class Cuti {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  alasanCuti: string;

  @Column()
  tanggalMulai: Date;

  @Column()
  tanggalSelesai: Date;

  @ManyToOne(() => Pegawai, (pegawai) => pegawai.id)
  @JoinColumn({ name: 'pegawaiId' })
  pegawai: Pegawai;

  @Column()
  pegawaiId: number;
}
