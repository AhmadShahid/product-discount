import { Module } from '@nestjs/common';
import { DiscountController } from './discount.controller';
import { DiscountService } from './discount.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discount } from './discount.entity';
@Module({
  imports: [SequelizeModule.forFeature([Discount])],
  controllers: [DiscountController],
  providers: [DiscountService],
})
export class DiscountModule {}
