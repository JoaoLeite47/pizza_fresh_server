import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(): string {
    return ' Server is runnig! please check the port: http://localhost:3000/api';
  }
}
