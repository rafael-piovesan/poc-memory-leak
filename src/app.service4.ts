/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { ApiService } from './api.service';

@Injectable()
export class AppService4 {
  constructor(private readonly apiService: ApiService) {}

  config(_clientId: string, _key: string) {
    return new AppService4(this.apiService);
  }

  async getHello() {
    return await this.apiService.getHello();
  }
}
