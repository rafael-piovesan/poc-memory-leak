import { Injectable } from '@nestjs/common';
import { ApiService } from './api.service';

@Injectable()
export class AppService1 {
  constructor(private readonly apiService: ApiService) {}

  config(clientId: string, key: string) {
    return new AppService1(
      this.apiService.changeClientId(clientId).changeKey(key),
    );
  }

  async getHello() {
    return await this.apiService.getHello();
  }
}
