import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Table> {
    const record = await this.prisma.table.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(` ${id} not found!`);
    }
    return record;
  } //method

  create(dto: CreateTableDto): Promise<Table> {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data });
  }

  findAll(): Promise<Table[]> {
    return this.prisma.table.findMany();
  }

  async findOne(id: string): Promise<Table> {
    return this.findById(id);
  }

  async update(id: string, dto: UpdateTableDto): Promise<Table> {
    await this.findById(id);
    const data: Partial<Table> = { ...dto };
    return this.prisma.table.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.findById(id);
    await this.prisma.table.delete({ where: { id } });
  }
}
