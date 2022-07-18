import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do produto',
    example: '6c0b0c58-7064-4095-bac9-16700cc40757',
  })
  productId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Quantidade do produto',
    example: 1,
  })
  quantity: number;

  @IsString()
  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Produto de teste',
  })
  description: string;
}
