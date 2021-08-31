import { Test, TestingModule } from '@nestjs/testing';
import { DiscountService } from './discount.service';
import { getModelToken } from '@nestjs/sequelize';
import { Discount } from './discount.entity';
import { CreateDiscountDto } from './dto/create-discount.dto';

const mockDiscountEntity = <Discount>{ id: 1, name: 'mi', discountValue: 5 };

describe('DiscountService', () => {
  let service: DiscountService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DiscountService,
        {
          provide: getModelToken(Discount),
          useValue: {
            findAll: jest.fn(() => [mockDiscountEntity]),
            findOne: jest.fn(() => mockDiscountEntity),
            create: jest.fn(() => mockDiscountEntity),
          },
        },
      ],
    }).compile();

    service = module.get<DiscountService>(DiscountService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should get the discounts', async () => {
    expect(await service.getAll()).toEqual([mockDiscountEntity]);
  });

  it('should get the discount by name', async () => {
    expect(await service.findByName('mi')).toEqual(mockDiscountEntity);
  });

  it('should get the discount by id', async () => {
    expect(await service.findById(1)).toEqual(mockDiscountEntity);
  });

  it('should add a discount', async () => {
    expect(await service.create(<CreateDiscountDto>mockDiscountEntity)).toEqual(
      mockDiscountEntity,
    );
  });
});
