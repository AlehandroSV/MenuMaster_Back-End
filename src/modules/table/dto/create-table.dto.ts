import { IsNumber, IsString } from 'class-validator';

export class CreateTableDto {
  @IsNumber()
  number: number;

  @IsString()
  name: string;
}
