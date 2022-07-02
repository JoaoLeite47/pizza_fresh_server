import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Product> {
    const record = await this.prisma.product.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(` ${id} not found!`);
    }
    return record;
  } //method for err tratament

  handleError(error: Error): undefined {
    const errorLines = error.message?.split('\n');
    const lastErrorLines = errorLines[errorLines.length - 1]?.trim(); //pego a mensagem de err da ultima linha
    throw new UnprocessableEntityException(
      lastErrorLines || 'Algum erro ocorreu ao criar uma mesa!',
    );
  } //throw para erros de tipos na criação de um novo objeto

  async create(dto: CreateProductDto): Promise<Product> {
    const data: Product = { ...dto };

    return this.prisma.product.create({ data }).catch(this.handleError);
  }

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  async findOne(id: string): Promise<Product> {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id);
    const data: Partial<Product> = { ...dto };
    return this.prisma.product
      .update({ where: { id }, data })
      .catch(this.handleError);
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.product.delete({ where: { id } });
  }
}
