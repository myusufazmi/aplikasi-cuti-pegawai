export const DatabaseConfig = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'password',
    database: 'cuti_karyawan',
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
};