import type { Relation } from 'typeorm';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Articul } from '../store/entities/articul.entity';
import { Product } from '../store/entities/product.entity';
import { BaseModel } from '../../core/base-model';

@Entity('cartItems')
export class CartItem extends BaseModel {
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
