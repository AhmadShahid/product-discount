import { Test, TestingModule } from '@nestjs/testing';
import { Category } from './category.entity';
import { OrderRequestDto } from './dto/order.request.dto';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Product } from './product.entity';

const mockProduct = <Product>{ id: 1, name: 'p1', code: '1001' };
const mockCategory = <Category>{ id: 1, name: 'p1' };
describe('OrderController', () => {
  let controller: OrderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        {
          provide: OrderService,
          useValue: {
            findProductByCode: jest.fn(() => mockProduct),
            findCategoryById: jest.fn(() => mockCategory),
            calculateProductDiscount: jest.fn(() => 5),
          },
        },
      ],
    }).compile();

    controller = module.get<OrderController>(OrderController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get discount percentage on product item', async () => {
    const orderDto = new OrderRequestDto();
    orderDto.productCode = '1001';
    orderDto.userId = 1;
    orderDto.amount = 50000;

    expect(await controller.getProductDiscontPercentage(orderDto)).toEqual(5);
  });
});
