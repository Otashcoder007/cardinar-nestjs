import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { OrderStatus, PaymentMethod } from '../../../core/enums';
import { User } from '../../auth/entities/user.entity';
import { Branch } from './branch.entity';

@Entity('orders')
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  userId: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userId' })
  user: Relation<User>;

  @Column({ type: 'int' })
  branchId: number;

  @ManyToOne(() => Branch)
  @JoinColumn({ name: 'branchId' })
  branch: Relation<Branch>;

  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  email: string | null;

  @Column({ type: 'boolean' })
  delivery: boolean;

  @Column({ type: 'enum', enum: PaymentMethod, enumName: 'paymentMethod' })
  paymentMethod: PaymentMethod;

  @Column({ type: 'enum', enum: OrderStatus, enumName: 'orderStatus' })
  status: OrderStatus;
}
