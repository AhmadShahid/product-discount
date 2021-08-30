import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import { Discount } from '../discount/discount.entity';
import { User } from '../users/user.entity';

@Table
export class Category extends Model<Category> {
  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  description: string;

  @BelongsTo(() => User, 'userId')
  user: User;
  @BelongsTo(() => Discount, 'discountId')
  discount: Discount;

  @BelongsTo(() => Category, 'parentId')
  parent: Category;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
