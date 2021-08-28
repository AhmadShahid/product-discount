import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './modules/users/user.entity';
import { UsersService } from './modules/users/users.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  getHello(): Promise<User[]> {
    return this.userService.getAll();
  }
}
