import { UnauthorizedException } from '@nestjs/common';
import { ErrorType } from '../enums/error-type.enum';

export class InvalidCredentialsException extends UnauthorizedException {
  constructor() {
    super({
      errorType: ErrorType.InvalidCredentials,
      message: 'Invalid credentials',
    });
  }
}
