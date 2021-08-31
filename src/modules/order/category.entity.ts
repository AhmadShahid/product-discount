import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  ForeignKey,
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

  @Column({
    type: DataType.INTEGER,
  })
  parentId: number;
  @Column({
    type: DataType.DATE,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
  })
  updatedAt: Date;
}
