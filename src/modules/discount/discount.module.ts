import { Module } from '@nestjs/common';
import { DiscountController } from './discount.controller';
import { discountProviders } from './discount.providers';
import { DiscountService } from './discount.service';

@Module({
  controllers: [DiscountController],
  providers: [DiscountService, ...discountProviders],
})
export class DiscountModule {}
