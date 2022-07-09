import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ description: 'Nome do usuário', example: 'Jao' })
  nickname: string;

  @ApiProperty({
    description: 'Nome do usuário de perfil',
    example: 'João Leite',
  })
  name: string;

  @IsString()
  @MinLength(6)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Senha muito fraca',
  })
  @ApiProperty({ description: 'Senha do usuário', example: 'new_password' })
  password: string;

  @ApiProperty({
    description: 'As senhas devem ser identicas!',
    example: 'new_password',
  })
  ConfirmPassword: string;

  @IsUrl()
  @ApiProperty({ description: 'URL da imagem do usuário', example: 'http://' })
  image: string;
}
