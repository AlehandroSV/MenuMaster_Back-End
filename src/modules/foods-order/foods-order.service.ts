import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CreateFoodsOrderDto } from './dto/create-foods-order.dto';

@Injectable()
export class FoodsOrderService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFoodsOrderDto: CreateFoodsOrderDto) {
    const foodsOrderCreate = await this.prisma.foodsOrder.create({
      data: createFoodsOrderDto,
    });

    return foodsOrderCreate;
  }
}
