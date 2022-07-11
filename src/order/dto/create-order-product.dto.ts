import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsString, IsUUID } from 'class-validator';

export class CreateOrderProductDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do produto',
    example: '57a90b56-680d-4e43-b6c1-f5b4fbdbe00f',
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
