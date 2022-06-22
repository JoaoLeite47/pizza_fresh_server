import { Injectable } from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';

@Injectable()
export class TableService {
  create(createTableDto: CreateTableDto) {
    return 'criar uma mesa! ' + JSON.stringify(createTableDto);
  }
  findAll() {
    return 'Buscar todas as mesas';
  }
}
