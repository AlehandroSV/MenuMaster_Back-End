import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './modules/auth/guards/jwt-auth.guard';
import { AdminModule } from './modules/admin/admin.module';
import { OrderModule } from './modules/order/order.module';
import { FoodModule } from './modules/food/food.module';
import { TableModule } from './modules/table/table.module';

@Module({
  imports: [AuthModule, AdminModule, OrderModule, FoodModule, TableModule],
  controllers: [],
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class AppModule {}
