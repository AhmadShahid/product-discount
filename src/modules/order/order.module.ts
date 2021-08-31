import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Product } from './product.entity';
import { Category } from './category.entity';

@Module({
  imports: [SequelizeModule.forFeature([Product, Category])],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
