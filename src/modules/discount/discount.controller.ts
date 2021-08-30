import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Discount } from './discount.entity';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';

@ApiTags('Discount')
@ApiBearerAuth()
@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ description: 'Get discount list' })
  @Get()
  getDisconts(): Promise<Discount[]> {
    return this.discountService.getAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ description: 'Create new discount' })
  @Post()
  createDiscount(@Body() discountDto: CreateDiscountDto) {
    return this.discountService.create(discountDto);
  }

  @ApiOperation({ description: 'Get discount by id' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Discount Id',
    schema: { type: 'integer' },
  })
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  getSignleDiscount(@Param('id') id) {
    return this.discountService.findById(id);
  }
}
