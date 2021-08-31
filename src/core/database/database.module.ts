import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { defaultConnection } from '../config/sequelize.config';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: defaultConnection,
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
