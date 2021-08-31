import { ForbiddenException } from '@nestjs/common';
import { ErrorType } from '../enums/error-type.enum';

export class InvalidCurrentPasswordException extends ForbiddenException {
  constructor() {
    super({
      errorType: ErrorType.InvalidCurrentPassword,
      message: 'The current password is invalid',
    });
  }
}
