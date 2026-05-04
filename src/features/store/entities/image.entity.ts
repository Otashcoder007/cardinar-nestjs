import type { Relation } from 'typeorm';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Product } from './product.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('images')
export class Image extends BaseModel {
  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Relation<Product>;

  @Column({ type: 'varchar', length: 256 })
  image: string;

  @Column({ type: 'int' })
  position: number;
}
