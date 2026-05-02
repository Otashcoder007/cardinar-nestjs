import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Category } from '../../../core/enums';
import { CarMake } from '../../store/entities/car-make.entity';
import { CarModel } from '../../store/entities/car-model.entity';
import { CustomModel } from './custom-model.entity';

@Entity('customProducts')
export class CustomProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  email: string | null;

  @Column({ type: 'int' })
  carMakeId: number;

  @ManyToOne(() => CarMake)
  @JoinColumn({ name: 'carMakeId' })
  carMake: Relation<CarMake>;

  @Column({ type: 'int' })
  carModelId: number;

  @ManyToOne(() => CarModel)
  @JoinColumn({ name: 'carModelId' })
  carModel: Relation<CarModel>;

  @Column({ type: 'enum', enum: Category, enumName: 'category' })
  category: Category;

  @Column({ type: 'int' })
  modelId: number;

  @ManyToOne(() => CustomModel)
  @JoinColumn({ name: 'modelId' })
  model: Relation<CustomModel>;

  @Column({ type: 'boolean' })
  withLogo: boolean;

  @Column({ type: 'varchar', length: 256 })
  image: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
