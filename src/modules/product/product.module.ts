import { Module } from '@nestjs/common';
import { productProviders } from './product-providers';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService, ...productProviders],
})
export class ProductModule {}
