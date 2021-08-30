import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrderDiscountResponseDto } from './dto/order.discount.response.dto';
import { OrderRequestDto } from './dto/order.request.dto';
import { ProductService } from './product.service';

@ApiTags('Order')
@ApiBearerAuth()
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ description: 'Get discount Value' })
  @Get('/invoice')
  async getProductDiscontPercentage(
    @Query() orderRequestDto: OrderRequestDto,
  ): Promise<OrderDiscountResponseDto> {
    return this.productService.calculateProductDiscount(orderRequestDto);
  }
}
