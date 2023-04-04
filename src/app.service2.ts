import { Injectable } from '@nestjs/common';
import { ApiService } from './api.service';

@Injectable()
export class AppService2Factory {
  constructor(private readonly apiService: ApiService) {}
  getService(clientId: string, key: string) {
    return new AppService2(this.apiService, clientId, key);
  }
}

export class AppService2 {
  constructor(
    private readonly apiService: ApiService,
    private readonly clientId: string,
    private readonly key: string,
  ) {}

  async getHello() {
    return this.apiService.getHello();
  }
}
