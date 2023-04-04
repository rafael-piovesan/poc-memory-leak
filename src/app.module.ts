import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ApiService } from './api.service';
import { AppController } from './app.controller';
import { AppService1 } from './app.service1';
import { AppService2Factory } from './app.service2';
import { AppService3Factory } from './app.service3';
import { AppService4 } from './app.service4';

@Module({
  imports: [HttpModule.register({})],
  controllers: [AppController],
  providers: [
    ApiService,
    AppService1,
    AppService2Factory,
    AppService3Factory,
    AppService4,
  ],
})
export class AppModule {}
