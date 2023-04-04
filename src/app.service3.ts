import { Injectable } from '@nestjs/common';
import { ApiService } from './api.service';

@Injectable()
export class AppService3Factory {
  constructor(private readonly apiService: ApiService) {}
  getService() {
    return new AppService3(this.apiService);
  }
}

export class AppService3 {
  constructor(private readonly apiService: ApiService) {}

  config(clientId: string, key: string) {
    return new AppService3(
      this.apiService.changeClientId(clientId).changeKey(key),
    );
  }

  async getHello() {
    return await this.apiService.getHello();
  }
}
