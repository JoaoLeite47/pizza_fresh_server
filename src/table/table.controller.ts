import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';
import { Table } from './entities/table.entity';
import { TableService } from './table.services';

@ApiTags('table') //swagger tag
@UseGuards(AuthGuard()) // necessario o token de autenticação para acessar o endpoint
@ApiBearerAuth() // cadeado de autenticação
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

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma mesa!' })
  update(@Param('id') id: string, @Body() dto: UpdateTableDto): Promise<Table> {
    return this.tableService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) //204
  @ApiOperation({ summary: 'Deletar uma mesa!' })
  delete(@Param('id') id: string) {
    this.tableService.delete(id);
  }
}
