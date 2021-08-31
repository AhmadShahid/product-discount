import {
  Table,
  Column,
  Model,
  DataType,
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

  @Column({
    type: DataType.INTEGER,
  })
  categoryId: number;
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  updatedAt: Date;
}
