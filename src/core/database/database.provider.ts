import { ConfigService } from '@nestjs/config';
import { Sequelize } from 'sequelize-typescript';
import { User } from 'src/modules/users/user.entity';
import { Discount } from 'src/modules/discount/discount.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (configService: ConfigService) => {
      console.log(configService.get('POSTGRES_HOST'));
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: configService.get('POSTGRES_HOST'),
        port: configService.get('POSTGRES_PORT'),
        username: configService.get('POSTGRES_USER'),
        password: configService.get('POSTGRES_PASSWORD'),
        database: configService.get('POSTGRES_DB'),
      });
      sequelize.addModels([User, Discount]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [ConfigService],
  },
];
