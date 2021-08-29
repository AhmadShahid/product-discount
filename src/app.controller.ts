import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from './modules/users/user.entity';
import { UsersService } from './modules/users/users.service';

@ApiBearerAuth()
@Controller()
export class AppController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getHello(): Promise<User[]> {
    return this.userService.getAll();
  }
}
