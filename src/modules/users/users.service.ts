import { Injectable } from '@nestjs/common';

import { User } from './user.entity';
import { UserDto } from './dto/user.dto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async create(user: UserDto): Promise<User> {
    return await this.userRepository.create<User>(user as User);
  }

  async findByEmail(email: string): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: { email },
      raw: true,
    });
  }

  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne<User>({
      where: { id },
      raw: true,
    });
  }
}
