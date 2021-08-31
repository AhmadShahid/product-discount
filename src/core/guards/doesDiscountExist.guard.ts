import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { DiscountService } from 'src/modules/discount/discount.service';
import { RecordExistsException } from '../exceptions/record.exists.exception';

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
    const discountExist = await this.discountService.findByName(
      request.body.name,
    );
    if (discountExist) {
      throw new RecordExistsException(request.body.name);
    }
    return true;
  }
}
