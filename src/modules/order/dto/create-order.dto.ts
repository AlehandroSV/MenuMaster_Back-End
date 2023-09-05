import { Status } from '@prisma/client';
import { IsArray, IsNumber, IsString } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  userName: string;

  @IsNumber()
  amount: number;

  status: Status;

  @IsString()
  tableId: string;

  @IsArray()
  foods: Foods[];
}

interface Foods {
  id: string;
  quantity: number;
}
