import type { Relation } from 'typeorm';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Color } from './color.entity';
import { Product } from './product.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('productColors')
export class ProductColor extends BaseModel {
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
