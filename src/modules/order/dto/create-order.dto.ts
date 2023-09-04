import { Status } from '@prisma/client';

export class CreateOrderDto {
  userName: string;
  amount: number;
  status: Status;

  tableId: string;
  foods: Foods[];
  quantity: number;
}

interface Foods {
  id: string;
}
