import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class OrderRequestDto {
  @ApiProperty({ example: '1001' })
  @IsNotEmpty()
  readonly productCode: string;

  @ApiProperty({ example: 1 })
  @IsNotEmpty()
  readonly userId: number;

  @ApiProperty({ example: 50000 })
  @IsNotEmpty()
  readonly amount: number;
}
