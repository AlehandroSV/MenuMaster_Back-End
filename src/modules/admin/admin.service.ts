import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import * as bcrypt from 'bcrypt';
import { decode } from 'jsonwebtoken';

@Injectable()
export class AdminService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return await this.prisma.admin.findUnique({ where: { email } });
  }

  async create(createAdminDto: CreateAdminDto, token: string) {
    const jwt = decode(token.replace('Bearer ', '')).sub;

    const user = await this.prisma.admin.findUnique({
      where: { id: jwt.toString() },
    });

    if (!user.isAdminPrincipal) {
      throw new HttpException(
        { message: 'Você não tem autorização para criar um Admin' },
        HttpStatus.CONFLICT,
      );
    }

    const existAdmin = await this.findByEmail(createAdminDto.email);

    if (existAdmin) {
      throw new HttpException(
        { message: 'O usuário com esse e-mail já existe.' },
        HttpStatus.CONFLICT,
      );
    }

    const data = {
      ...createAdminDto,
      password: await bcrypt.hash(createAdminDto.password, 8),
    };

    const adminCreated = await this.prisma.admin.create({ data });

    return {
      ...adminCreated,
      password: undefined,
    };
  }

  async findOne(id: string) {
    try {
      const admin = await this.prisma.admin.findUniqueOrThrow({
        where: { id },
      });

      return {
        ...admin,
        password: undefined,
      };
    } catch (error) {
      throw new HttpException(
        { message: 'Usuário não encontrado' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
