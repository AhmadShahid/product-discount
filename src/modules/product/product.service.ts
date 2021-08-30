import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { PRODUCT_REPOSITORY } from 'src/core/constants';
import { Discount } from '../discount/discount.entity';
import { User } from '../users/user.entity';
import { Category } from './category.entity';
import { OrderDiscountResponseDto } from './dto/order.discount.response.dto';
import { OrderRequestDto } from './dto/order.request.dto';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @Inject(PRODUCT_REPOSITORY)
    private readonly productRepository: typeof Product,
  ) {}

  async findByCode(code: string): Promise<Product> {
    return await this.productRepository.findOne<Product>({
      include: [
        {
          model: Discount,
          attributes: ['discountValue'],
          required: true,
        },
        {
          model: Category,
          include: [Category],
          required: true,
          attributes: ['id', 'name', 'discountId'],
        },
        {
          model: User,
          required: true,
          attributes: ['id', 'name'],
        },
      ],
      where: { code },
      raw: true,
    });
  }

  async calculateProductDiscount(
    orderRequestDto: OrderRequestDto,
  ): Promise<OrderDiscountResponseDto> {
    // const productDetail = await this.findByCode(orderRequestDto.productCode);

    // if (!productDetail) {
    //   throw new HttpException('No Product found', HttpStatus.NOT_FOUND);
    // }
    const productDetail = {
      id: 1,
      discount: null,
      category: {
        parent: { discount: { discountValue: 20 } },
      },
    };
    let discountValue = -1;
    if (productDetail.discount) {
      discountValue = productDetail.discount.discountValue;
    } else {
      discountValue = this.getCategoryDiscountValue(productDetail.category);
    }

    return <OrderDiscountResponseDto>{
      discountInPercentage: discountValue,
    };
  }

  private getCategoryDiscountValue(category): number {
    if (category.discount) {
      return category.discount.discountValue;
    }

    return this.getCategoryDiscountValue(category.parent);
  }
}
