import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAll(){
    console.log(1);
    return "시발";
  }
}


