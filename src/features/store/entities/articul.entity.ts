import type { Relation } from 'typeorm';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CarModel } from './car-model.entity';
import { Product } from './product.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('articul')
export class Articul extends BaseModel {
  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Relation<Product>;

  @Column({ type: 'int' })
  carModelId: number;

  @ManyToOne(() => CarModel)
  @JoinColumn({ name: 'carModelId' })
  carModel: Relation<CarModel>;
}
