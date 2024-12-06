# Aplikasi Manajemen Cuti Pegawai

Aplikasi ini adalah sistem untuk mengelola data pegawai dan pengajuan cuti menggunakan **Next.js** untuk frontend, **NestJS** untuk backend, dan **MySQL** untuk database.

## Fitur Utama

- Mengelola data admin dan pegawai.
- Melihat riwayat cuti pegawai.
- menambahkan cuti.
- Melihat daftar cuti.
- mengedit dan menghapus cuti

## Teknologi yang Digunakan

- **Frontend**: Next.js, Mantine UI
- **Backend**: NestJS, MySQL, TypeORM

## Instalasi

1. **Clone Repository**:

   ```bash
   git clone https://github.com/username/repo.git
   cd repo
   ```

2. **Instalasi Dependencies**:
   ```
   npm install
   ```
3. **Menjalankan Aplikasi**:

   Untuk frontend (Next.js):

   ```
   npm run dev --workspace frontend
   ```

   Untuk backend (NestJS):

   ```
   npm run start --workspace backend
   ```

   Aplikasi akan berjalan di:

   Frontend: http://localhost:3000
   Backend: http://localhost:4000

4. **Seeding Admin Default**:

   Untuk menambahkan admin default ke database, jalankan:

   ```
   npm run seed:admin
   ```

## Struktur Proyek

    apps/
    ├── backend/               # Backend (NestJS)
    ├── frontend/              # Frontend (Next.js)
    └── docker-compose.yml     # Docker setup (opsional)
