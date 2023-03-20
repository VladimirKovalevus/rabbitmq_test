import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/ping-a")
  pingServiceA() {
    return this.appService.pingServiceA();
  }
  @Post()
  sendServiceA(@Body() msg){
    return this.appService.sendServiceA(msg);
  }
}
