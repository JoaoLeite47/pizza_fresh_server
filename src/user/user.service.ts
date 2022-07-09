import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<User> {
    const record = await this.prisma.user.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(` ${id} not found!`);
    }
    return record;
  } //method for err tratament

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim(); //pego a mensagem de err da ultima linha

    if (!lastErrorLines) {
      console.error(error);
    }
    throw new UnprocessableEntityException(
      lastErrorLines || 'Algum erro ocorreu na operação!',
    );
  } //throw para erros de tipos na criação de um novo objeto

  async create(dto: CreateUserDto): Promise<User> {
    delete dto.ConfirmPassword;

    const data: User = { ...dto };

    return this.prisma.user.create({ data }).catch(this.handleError);
  }

  findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: string): Promise<User> {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User> {
    await this.findById(id);
    delete dto.ConfirmPassword;
    const data: Partial<User> = { ...dto };
    return this.prisma.user
      .update({ where: { id }, data })
      .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.user.delete({ where: { id } });
  }
}
