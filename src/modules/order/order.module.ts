import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { PrismaService } from 'src/database/prisma.service';
import { FoodsOrderService } from '../foods-order/foods-order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, PrismaService, FoodsOrderService],
})
export class OrderModule {}
