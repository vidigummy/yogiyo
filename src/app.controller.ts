
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }

  @Get('/index.hbs')
  @Render('index')
  root_e() {
    return { message: 'Hello world!' };
  }

  @Get('/a.hbs')
  @Render('a')
  boot(){
    return {message: 'hello world'};
  }
}