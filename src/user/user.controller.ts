import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um usuário' })
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os usuários' })
  @UseGuards(AuthGuard()) // necessario o token de autenticação para acessar o endpoint
  @ApiBearerAuth() // cadeado de autenticação
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar um usuário apenas' })
  @UseGuards(AuthGuard()) // necessario o token de autenticação para acessar o endpoint
  @ApiBearerAuth() // cadeado de autenticação
  findOne(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um usuário' })
  @UseGuards(AuthGuard()) // necessario o token de autenticação para acessar o endpoint
  @ApiBearerAuth() // cadeado de autenticação
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Deletar um usuário' })
  @UseGuards(AuthGuard()) // necessario o token de autenticação para acessar o endpoint
  @ApiBearerAuth() // cadeado de autenticação
  delete(@Param('id') id: string) {
    this.userService.delete(id);
  }
}
