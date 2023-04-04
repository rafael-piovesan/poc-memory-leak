import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ApiService {
  private clientId: string;
  private key: string;

  constructor(private readonly httpService: HttpService) {}

  setClientId(clientId: string) {
    this.clientId = clientId;
    return this;
  }

  setKey(key: string) {
    this.key = key;
    return this;
  }

  changeClientId(clientId: string) {
    return new ApiService(this.httpService)
      .setClientId(clientId)
      .setKey(this.key);
  }

  changeKey(key: string) {
    return new ApiService(this.httpService)
      .setKey(key)
      .setClientId(this.clientId);
  }

  async getHello() {
    const res = await lastValueFrom(
      this.httpService.get('http://localhost:3030/hello', {
        headers: {
          'Content-Type': 'application/json',
          ClientId: this.clientId,
          ClientKey: this.key,
        },
      }),
    );
    return res.data;
  }
}
