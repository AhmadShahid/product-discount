import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discount } from 'src/modules/discount/discount.entity';
import { Category } from 'src/modules/order/category.entity';
import { Product } from 'src/modules/order/product.entity';
import { User } from 'src/modules/users/user.entity';

@Module({
  imports: [
    ConfigModule,
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, Discount, Product, Category],
    }),
  ],
})
export class DatabaseModule {}
