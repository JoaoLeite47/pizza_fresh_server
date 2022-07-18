import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}
  async login(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { nickname, password } = loginDto;

    const user = await this.prisma.user.findUnique({
      where: { nickname },
    });

    if (!user) {
      throw new UnauthorizedException('Usuário e/ou senha não encontrados!');
    }

    const isHashValid = bcrypt.compare(password, user.password); // valida a senha com o metodo de compararação do prórpio bcrypt

    if (!isHashValid) {
      throw new UnauthorizedException('Usuário e/ou senha não encontrados!');
    }

    delete user.password; // garante que a senha não seja retornada

    return {
      token: 'LEMBRAR DE COLOCAR O TOKEN AQUI',
      user,
    };
  }
}
