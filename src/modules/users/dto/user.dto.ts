import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsEnum,
  Matches,
  IsAlphanumeric,
} from 'class-validator';

enum Gender {
  MALE = 'male',
  FEMALE = 'female',
}
const passwordRegex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;

export class UserDto {
  @ApiProperty({ example: 'Shahid Ahmad' })
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'test@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'shahid123456' })
  @Matches(passwordRegex, { message: 'Password too weak' })
  @IsNotEmpty()
  @IsAlphanumeric()
  @MinLength(6)
  readonly password: string;

  @ApiProperty({ enum: ['male', 'female'] })
  @IsNotEmpty()
  @IsEnum(Gender, {
    message: 'gender must be either male or female',
  })
  readonly gender: Gender;
}
