import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class OrderService {
  constructor(private readonly prisma: PrismaService) {}

  create(createOrderDto: CreateOrderDto) {
    try {
      return this.prisma.order.create({ data: createOrderDto });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Item' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll() {
    try {
      return this.prisma.order.findMany();
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Item' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findOne(id: string) {
    try {
      return this.prisma.order.findUniqueOrThrow({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Item' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      return this.prisma.order.update({ where: { id }, data: updateOrderDto });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Item' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  remove(id: string) {
    try {
      return this.prisma.order.delete({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Item' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
