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
  @ApiProperty({ description: 'Senha do usuário', example: 'N3w_password' })
  password: string;

  @ApiProperty({
    description: 'As senhas devem ser identicas!',
    example: 'N3w_password',
  })
  ConfirmPassword: string;

  @IsUrl()
  @ApiProperty({
    description: 'URL da imagem do usuário',
    example: 'https://miro.medium.com/max/640/0*i1v1In2Tn4Stnwnl.jpg',
  })
  image: string;
}
