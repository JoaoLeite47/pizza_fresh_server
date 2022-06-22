import { Module } from '@nestjs/common';
import { TableController } from './table.controller';
import { TableService } from './table.services';

@Module({
  controllers: [TableController],
  providers: [TableService],
})
export class TableModule {}
