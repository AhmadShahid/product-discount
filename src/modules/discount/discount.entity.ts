import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { User } from '../users/user.entity';

@Table
export class Discount extends Model<Discount> {
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.DECIMAL(3, 2),
  })
  discountValue: number;

  @BelongsTo(() => User, 'userId')
  user: User;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
