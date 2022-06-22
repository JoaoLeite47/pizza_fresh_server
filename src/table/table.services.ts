import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';

@Injectable()
export class TableService {
  tables: Table[] = [];

  create(createTableDto: CreateTableDto) {
    const table: Table = { id: 'ramdom_id', ...createTableDto };

    this.tables.push(table);

    return table;
  }

  findAll() {
    return this.tables;
  }
}
