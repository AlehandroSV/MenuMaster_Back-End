import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  create(createFoodDto: CreateFoodDto) {
    try {
      return this.prisma.food.create({ data: createFoodDto });
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Item' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findAll() {
    try {
      return this.prisma.food.findMany();
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível carregar todos os Itens' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  findOne(id: string) {
    try {
      return this.prisma.food.findUniqueOrThrow({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: `Não encontramos o item com id: ${id}` },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  update(id: string, updateFoodDto: UpdateFoodDto) {
    try {
      return this.prisma.food.update({ where: { id }, data: updateFoodDto });
    } catch (error) {
      throw new HttpException(
        { message: `Não foi possível excluir a entidade com o id: ${id}` },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  remove(id: string) {
    try {
      return this.prisma.food.delete({ where: { id } });
    } catch (error) {
      throw new HttpException(
        { message: `Não foi possível excluir a entidade com o id: ${id}` },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
