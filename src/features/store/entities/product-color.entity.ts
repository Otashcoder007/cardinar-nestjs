import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Color } from './color.entity';
import { Product } from './product.entity';

@Entity('productColors')
export class ProductColor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Relation<Product>;

  @Column({ type: 'int' })
  colorId: number;

  @ManyToOne(() => Color)
  @JoinColumn({ name: 'colorId' })
  color: Relation<Color>;
}
