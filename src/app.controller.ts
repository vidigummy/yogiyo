
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('/a.hbs')
  @Render('index')
  boot(){
    return {message: 'hello world'};
  }
}