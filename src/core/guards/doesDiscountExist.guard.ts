import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DiscountService } from 'src/modules/discount/discount.service';

@Injectable()
export class DoesDiscountExist implements CanActivate {
  constructor(private readonly discountService: DiscountService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    const userExist = await this.discountService.findByName(request.body.name);
    if (userExist) {
      throw new ForbiddenException('Discount with same name already exist');
    }
    return true;
  }
}
