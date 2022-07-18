import { Controller, Get, Req } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Request } from 'express';
import { AppService } from './app.service';

@ApiTags('status') //swagger tag
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /**
   * Recebe uma requisição GET e retorna um objeto de status
   * da aplicação com a URL de documentação
   * @param req Objeto de Request do Express
   * @returns Objeto de status da aplicação
   */
  @Get()
  getAppStatus(@Req() req: Request) {
    const baseURL = req.protocol + '://' + req.get('host'); //Base URl montado de acordo com a url do deploy
    return this.appService.getAppStatus(baseURL);
  }
}
