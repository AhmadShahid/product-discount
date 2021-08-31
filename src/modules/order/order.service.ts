import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Discount } from '../discount/discount.entity';
import { User } from '../users/user.entity';
import { Category } from './category.entity';
import { OrderDiscountResponseDto } from './dto/order.discount.response.dto';
import { OrderRequestDto } from './dto/order.request.dto';
import { Product } from './product.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Product)
    private readonly productRepository: typeof Product,

    @InjectModel(Category)
    private readonly categoryRepository: typeof Category,
  ) {}

  async findProductByCode(code: string): Promise<Product> {
    return await this.productRepository.findOne<Product>({
      include: [
        {
          model: Discount,
          attributes: ['discountValue'],
        },
        {
          model: User,
          required: true,
          attributes: ['id', 'name'],
        },
      ],
      where: { code },
    });
  }

  async getCategoryDiscountValue(categoryId: number) {
    const categoryDetail = await this.findCategoryById(categoryId);
    if (categoryDetail && categoryDetail.discount !== null) {
      return categoryDetail.discount.discountValue;
    }
    if (categoryDetail.parentId === null) return -1;
    return this.getCategoryDiscountValue(categoryDetail.parentId);
  }
  async findCategoryById(id): Promise<Category> {
    return await this.categoryRepository.findOne<Category>({
      include: {
        model: Discount,
        attributes: ['discountValue'],
      },
      where: { id },
    });
  }
  async calculateProductDiscount(
    orderRequestDto: OrderRequestDto,
  ): Promise<OrderDiscountResponseDto> {
    const productDetail = await this.findProductByCode(
      orderRequestDto.productCode,
    );

    if (!productDetail) {
      throw new HttpException('No Product found', HttpStatus.NOT_FOUND);
    }

    let discountValue = -1;
    if (productDetail.discount) {
      discountValue = +productDetail.discount.discountValue;
    } else {
      discountValue = +(await this.getCategoryDiscountValue(
        productDetail.categoryId,
      ));
    }

    return <OrderDiscountResponseDto>{
      discountInPercentage: discountValue,
    };
  }
}
