import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsPositive } from 'class-validator';

export class CreateTableDto {
  @IsNumber() //validação
  @IsPositive() //validação
  @ApiProperty({
    description: 'O número da mesa!',
    example: 1,
  }) // indica que é uma propriedade de uma API, com descrição e exemplo!
  number: number;
}
