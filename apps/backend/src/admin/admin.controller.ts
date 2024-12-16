import { Controller, Post, Body, Param, Get, Put, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) { }

  @Post()
  async create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.create(createAdminDto);
  }

  @Get('list')
  async findAll() {
    const admins = await this.adminService.findAll()
    const mappedAdmin = admins.map((admin) => {
      delete admin.password
      return admin
    })
    return mappedAdmin;
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const admin = await this.adminService.findOne(+id)
    delete admin.password
    return admin
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }

  @Post('login')
  async login(@Body() loginAdminDto: LoginAdminDto) {
    console.log(loginAdminDto)
    return this.adminService.login(loginAdminDto);
  }
}
