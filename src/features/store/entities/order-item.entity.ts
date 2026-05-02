import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Articul } from './articul.entity';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity('orderItems')
export class OrderItem {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  orderId: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'orderId' })
  order: Relation<Order>;

  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'productId' })
  product: Relation<Product>;

  @Column({ type: 'int' })
  articulId: number;

  @ManyToOne(() => Articul)
  @JoinColumn({ name: 'articulId' })
  articul: Relation<Articul>;

  @Column({ type: 'int', default: 1 })
  quantity: number;
}
