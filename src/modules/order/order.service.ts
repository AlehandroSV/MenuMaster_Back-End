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
      const order = await this.prisma.order.create({
        data: {
          userName: createOrderDto.userName,
          amount: createOrderDto.amount,
          status: createOrderDto.status,
          tableId: createOrderDto.tableId,
        },
        include: { FoodsOrder: { include: { Food: {} } } },
      });

      createOrderDto.foods.forEach(async (item) => {
        await this.foodsOrder.create({
          foodId: item.id,
          orderId: order.id,
          quantity: item.quantity,
        });
      });

      return order;
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Pedido' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      const orders = await this.prisma.order.findMany();

      return orders;
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar a Ordem' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string) {
    try {
      const order = await this.prisma.order.findUniqueOrThrow({
        where: { id },
      });

      return order;
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Ordem' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    try {
      const orderUpdate = await this.prisma.order.update({
        where: { id },
        data: updateOrderDto,
      });

      return orderUpdate;
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Item' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: string) {
    try {
      const orderDelete = await this.prisma.order.delete({ where: { id } });

      return orderDelete;
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Item' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }
}
