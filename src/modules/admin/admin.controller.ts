import { Body, Controller, Get, Param, Post, Headers } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto, @Headers() headers) {
    const authorizationHeader = headers.authorization;

    return this.adminService.create(createAdminDto, authorizationHeader);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }
}
