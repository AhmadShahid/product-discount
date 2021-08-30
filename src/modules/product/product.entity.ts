import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Discount } from '../discount/discount.entity';
import { User } from '../users/user.entity';
import { Category } from './category.entity';

@Table
export class Product extends Model<Product> {
  @Column({
    type: DataType.STRING,
  })
  code: string;

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

  @BelongsTo(() => Category, 'categoryId')
  category: Category;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
