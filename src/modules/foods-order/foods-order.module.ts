import { Module } from '@nestjs/common';
import { FoodsOrderService } from './foods-order.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  providers: [FoodsOrderService, PrismaService],
  exports: [FoodsOrderService],
})
export class FoodsOrderModule {}
