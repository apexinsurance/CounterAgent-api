import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      name: "CounterAgent service API",
      docs: '/docs'
    };
  }
}
