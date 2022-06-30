import { PartialType } from '@nestjs/mapped-types';
import { CreateTableDto } from './create-table.dto';

export class UpdateTableDto extends PartialType(CreateTableDto) {} //dto simplificado para funcionar com variaveis opcionais, utilizando a lib PartialType, onde não mais o PUT é feito e sim um Patch
