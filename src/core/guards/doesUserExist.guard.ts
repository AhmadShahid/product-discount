import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

import { UsersService } from '../../modules/users/users.service';
import { RecordExistsException } from '../exceptions/record.exists.exception';

@Injectable()
export class DoesUserExist implements CanActivate {
  constructor(private readonly userService: UsersService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return this.validateRequest(request);
  }

  async validateRequest(request) {
    const userExist = await this.userService.findByEmail(request.body.email);
    if (userExist) {
      throw new RecordExistsException(request.body.email);
    }
    return true;
  }
}
