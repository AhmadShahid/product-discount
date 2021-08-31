import { Test, TestingModule } from '@nestjs/testing';

import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/sequelize';
import { User } from './user.entity';
import { UserDto } from './dto/user.dto';

const mockUser = <User>{
  id: 1,
  name: 'shahid',
  email: 'shahidahmad527@gmail.com',
};
describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User),
          useValue: {
            findOne: jest.fn(() => mockUser),
            create: jest.fn(() => mockUser),
          },
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('get user by email', async () => {
    expect(await service.findByEmail('shahidahmad527@gmail.com')).toEqual(
      mockUser,
    );
  });

  it('get user by id', async () => {
    expect(await service.findById(1)).toEqual(mockUser);
  });

  it('should add a user', async () => {
    expect(
      await service.create(<UserDto>{
        name: 'shahid',
        email: 'shahidahmad527@gmail.com',
      }),
    ).toEqual(mockUser);
  });
});
