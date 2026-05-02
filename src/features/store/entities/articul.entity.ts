import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { CarModel } from './car-model.entity';
import { Product } from './product.entity';

@Entity('articul')
export class Articul {
  @PrimaryGeneratedColumn()
  id: number;

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
