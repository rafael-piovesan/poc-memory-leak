import { Controller, Get } from '@nestjs/common';
import { AppService1 } from './app.service1';
import { AppService2Factory } from './app.service2';
import { AppService3Factory } from './app.service3';
import { AppService4 } from './app.service4';

@Controller()
export class AppController {
  constructor(
    private readonly appService1: AppService1,
    private readonly appService2Factory: AppService2Factory,
    private readonly appService3Factory: AppService3Factory,
    private readonly appService4: AppService4,
  ) {}

  @Get('/1')
  async getHello1() {
    const svc = this.appService1.config('client1', 'key1');
    return svc.getHello();
  }

  @Get('/2')
  async getHello2() {
    const svc = this.appService2Factory.getService('client2', 'key2');
    return svc.getHello();
  }

  @Get('/3')
  async getHello3() {
    const svc = this.appService3Factory.getService().config('client3', 'key3');
    return svc.getHello();
  }

  @Get('/4')
  async getHello4() {
    const svc = this.appService4.config('client4', 'key4');
    return svc.getHello();
  }
}
