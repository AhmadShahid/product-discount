import {
  Body,
  Controller,
  Post,
  UseGuards,
  Request,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DoesUserExist } from 'src/core/guards/doesUserExist.guard';
import { UserDto } from '../users/dto/user.dto';
import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @ApiBody({
    description: 'Login crediential',
    type: <any>{},
  })
  @ApiOkResponse({
    description: 'The user login successfully.',
  })
  @ApiOperation({ summary: 'User login' })
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @ApiOperation({ summary: 'User signup' })
  @ApiCreatedResponse({
    description: 'The user has been signup successfully.',
  })
  @UseGuards(DoesUserExist)
  @Post('signup')
  async signUp(@Body() user: UserDto) {
    return await this.authService.create(user);
  }
}
