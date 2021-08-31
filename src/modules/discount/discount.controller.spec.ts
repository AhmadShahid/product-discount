import { Test, TestingModule } from '@nestjs/testing';
import { DiscountController } from './discount.controller';
import { Discount } from './discount.entity';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';

const mockDiscountEntity = <Discount>{ id: 1, discountValue: 5 };

describe('DiscountController', () => {
  let controller: DiscountController;
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [DiscountController],
      providers: [
        {
          provide: DiscountService,
          useValue: {
            getAll: jest.fn(() => [mockDiscountEntity]),
            findById: jest.fn(() => mockDiscountEntity),
            create: jest.fn(() => mockDiscountEntity),
          },
        },
      ],
    }).compile();

    controller = moduleRef.get<DiscountController>(DiscountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get all discounts', async () => {
    expect(await controller.getDisconts()).toEqual([mockDiscountEntity]);
  });

  it('get discount by id', async () => {
    expect(await controller.getSignleDiscount(1)).toEqual(mockDiscountEntity);
  });

  it('should make a new cat', async () => {
    expect(
      await controller.createDiscount(<CreateDiscountDto>mockDiscountEntity),
    ).toEqual(mockDiscountEntity);
  });
});
