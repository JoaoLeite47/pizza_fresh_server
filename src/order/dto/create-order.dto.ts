import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive, IsUUID } from 'class-validator';

export class CreateOrderDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id do usuário que criou o pedido',
    example: '227d6f27-87d0-42c6-88f0-874a148a5993',
  })
  userId: string;

  @IsInt()
  @IsPositive()
  @ApiProperty({
    description: 'Id da mesa que o pedido foi feito',
    example: '1',
  })
  tableNumber: number;

  @IsUUID(undefined, { each: true })
  @ApiProperty({
    description: 'Lista de produtos do pedido',
    example: '["57a90b56-680d-4e43-b6c1-f5b4fbdbe00f"]',
  })
  products: string[];
}
