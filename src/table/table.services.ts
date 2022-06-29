import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  constructor(private readonly prisma: PrismaService) {}

  create(dto: CreateTableDto) {
    const data: Table = { ...dto };

    return this.prisma.table.create({ data });
  }

  findAll() {
    return this.prisma.table.findMany();
  }
}
