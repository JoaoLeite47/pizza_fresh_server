import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Nome do usuário', example: 'Jao' })
  nickname: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Senha do usuário', example: 'N3w_password' })
  password: string;
}
