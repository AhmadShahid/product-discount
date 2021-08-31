import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { UserDto } from '../users/dto/user.dto';
import { LoginRequestDto } from '../users/dto/login.request.dto';
import { InvalidCurrentPasswordException } from 'src/core/exceptions/invalid-current-password.exception';
import { InvalidCredentialsException } from 'src/core/exceptions/invalid-credientails.exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      throw new InvalidCredentialsException();
    }
    const match = await this.comparePassword(pass, user.password);
    if (!match) {
      throw new InvalidCurrentPasswordException();
    }
    return user;
  }

  public async login(loginDto: LoginRequestDto) {
    const user = await this.validateUser(loginDto.email, loginDto.password);
    const token = await this.generateToken(user);
    return { user, token };
  }

  public async create(user: UserDto) {
    const pass = await this.hashPassword(user.password);
    const newUser = await this.userService.create({ ...user, password: pass });
    const token = await this.generateToken(newUser['dataValues']);
    return { user: newUser, token };
  }

  private async generateToken(user) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(enteredPassword, dbPassword) {
    const match = await bcrypt.compare(enteredPassword, dbPassword);
    return match;
  }
}
