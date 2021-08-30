import { Table, Column, Model, DataType } from 'sequelize-typescript';

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
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
