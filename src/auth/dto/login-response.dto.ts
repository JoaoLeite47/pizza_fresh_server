import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/user/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'Token de autenticação',
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IkphbyIsImlhdCI6MTY1ODE2MTUyMCwiZXhwIjoxNjU4MTY1MTIwfQ.-DWiBQE6A_mcT4rG8xoqb6WKxEs0N4FaB70p9Ow9R6o',
  })
  token: string;

  @ApiProperty({ description: 'Usuário autenticado' })
  user: User;
}
