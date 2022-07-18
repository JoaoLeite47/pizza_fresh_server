import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'Token de autenticação',
    example: 'LEMBRAR DE COLOCAR O TOKEN AQUI',
  })
  token: string;

  @ApiProperty({ description: 'Usuário autenticado' })
  user: User;
}
