import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateFoodDto } from './dto/create-food.dto';
import { UpdateFoodDto } from './dto/update-food.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class FoodService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFoodDto: CreateFoodDto) {
    try {
      const foodCreate = await this.prisma.food.create({ data: createFoodDto });

      return foodCreate;
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível criar o Item' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findAll() {
    try {
      const foods = await this.prisma.food.findMany();

      return foods;
    } catch (error) {
      throw new HttpException(
        { message: 'Não foi possível carregar todos os Itens' },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async findOne(id: string) {
    try {
      const food = await this.prisma.food.findUniqueOrThrow({ where: { id } });

      return food;
    } catch (error) {
      throw new HttpException(
        { message: `Não encontramos o item com id: ${id}` },
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async update(id: string, updateFoodDto: UpdateFoodDto) {
    try {
      const foodUpdate = await this.prisma.food.update({
        where: { id },
        data: { ...updateFoodDto, updated_at: new Date() },
      });

      return foodUpdate;
    } catch (error) {
      throw new HttpException(
        { message: `Não foi possível excluir a entidade com o id: ${id}` },
        HttpStatus.BAD_REQUEST,
      );
    }
  }

  async remove(id: string) {
    try {
      const foodRemove = await this.prisma.food.delete({ where: { id } });

      return foodRemove;
    } catch (error) {
      throw new HttpException(
        { message: `Não foi possível excluir a entidade com o id: ${id}` },
        HttpStatus.NOT_FOUND,
      );
    }
  }
}
