import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAppStatus(baseURL: string) {
    return {
      status: 'Server is runnig! please check!',
      docs: baseURL + '/api',
    };
  }
}
