import { ConflictException } from '@nestjs/common';
import { ErrorType } from '../enums/error-type.enum';

export class RecordExistsException extends ConflictException {
  constructor(username: string) {
    super({
      errorType: ErrorType.UserExists,
      message: `There's a record exist with same '${username}'`,
    });
  }
}
