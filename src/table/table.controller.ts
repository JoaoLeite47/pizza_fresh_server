import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { CreateTableDto } from './dto/create-table.dto';
import { Table } from './entities/table.entity';
import { TableService } from './table.services';

@ApiTags('table') //swagger tag
@Controller('table')
export class TableController {
  constructor(private readonly tableService: TableService) {}
  @Get()
  @ApiOperation({ summary: 'Listar todas as mesas!' })
  findAll(): Promise<Table[]> {
    return this.tableService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma mesa!' })
  create(@Body() dto: CreateTableDto): Promise<Table> {
    return this.tableService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Selecionar uma mesa!' })
  findOne(@Param('id') id: string): Promise<Table> {
    return this.tableService.findOne(id);
  }
}
