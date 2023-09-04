import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from 'src/database/prisma.service';
import { FoodsOrderService } from '../foods-order/foods-order.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly foodsOrder: FoodsOrderService,
  ) {}

  async create(createOrderDto: CreateOrderDto) {
    try {
      const order = await this.prisma.order.create({ data: createOrderDto });

      createOrderDto.foods.forEach((item) => {
        this.foodsOrder.create({
          foodId: item.id,
          orderId: order.id,
          quantity: createOrderDto.quantity,
        });
      });

      const getOrder = await this.prisma.order.findUnique({
        where: { id: order.id },
        include: { FoodsOrder: { include: { Food: {} } } },
      });

      return getOrder;
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Pedido' },
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
