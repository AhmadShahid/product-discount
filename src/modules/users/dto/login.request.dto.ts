import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({ example: 'admin@gmail.com' })
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ example: 'admin123' })
  @IsNotEmpty()
  readonly password: string;
}
