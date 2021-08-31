import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Discount } from './discount.entity';
import { CreateDiscountDto } from './dto/create-discount.dto';

@Injectable()
export class DiscountService {
  constructor(
    @InjectModel(Discount)
    private readonly discountRepository: typeof Discount,
  ) {}

  async create(discount: CreateDiscountDto): Promise<Discount> {
    return await this.discountRepository.create<Discount>(discount as Discount);
  }

  async getAll(): Promise<Discount[]> {
    return await this.discountRepository.findAll<Discount>();
  }

  async findById(id: number): Promise<Discount> {
    return await this.discountRepository.findOne<Discount>({
      where: { id },
      raw: true,
    });
  }
}
