import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  create(createTableDto: CreateTableDto) {
    return this.prisma.table.create({
      data: createTableDto,
    });
  }

  findAll() {
    return this.prisma.table.findMany({
      where: { Order: { some: { status: { not: 'CONCLUDED' } } } },
    });
  }

  findOne(id: string) {
    return this.prisma.table.findUniqueOrThrow({
      where: { id },
      include: {
        Order: {
          where: { status: { not: 'CONCLUDED' } },
          include: { FoodsOrder: { include: { Food: {} } } },
        },
      },
    });
  }

  update(id: string, updateTableDto: UpdateTableDto) {
    return this.prisma.table.update({ where: { id }, data: updateTableDto });
  }

  remove(id: string) {
    return this.prisma.table.delete({ where: { id } });
  }
}
