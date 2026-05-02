import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { CarMake } from './car-make.entity';

@Entity('carModels')
export class CarModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  carMakeId: number;

  @ManyToOne(() => CarMake)
  @JoinColumn({ name: 'carMakeId' })
  carMake: Relation<CarMake>;

  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;
}
