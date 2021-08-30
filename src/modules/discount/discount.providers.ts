import { DISCOUNT_REPOSITORY } from '../../core/constants';
import { Discount } from './discount.entity';

export const discountProviders = [
  {
    provide: DISCOUNT_REPOSITORY,
    useValue: Discount,
  },
];
