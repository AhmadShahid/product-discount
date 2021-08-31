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
    type: DataType.DECIMAL(5, 2),
  })
  discountValue: number;

  @BelongsTo(() => User, 'userId')
  user: User;

  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  updatedAt: Date;
}
