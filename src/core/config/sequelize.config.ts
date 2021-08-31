import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Discount } from 'src/modules/discount/discount.entity';
import { Category } from 'src/modules/order/category.entity';
import { Product } from 'src/modules/order/product.entity';
import { User } from 'src/modules/users/user.entity';

/**
 * Setup default connection in the application
 * @param config {ConfigService}
 */
export const defaultConnection = (
  config: ConfigService,
): SequelizeModuleOptions => ({
  dialect: 'postgres',
  host: config.get('POSTGRES_HOST'),
  port: config.get('POSTGRES_PORT'),
  username: config.get('POSTGRES_USER'),
  password: config.get('POSTGRES_PASSWORD'),
  database: config.get('POSTGRES_DB'),
  models: [User, Discount, Product, Category],
});
