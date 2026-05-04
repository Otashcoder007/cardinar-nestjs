import type { Relation } from 'typeorm';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CarMake } from './car-make.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('carModels')
export class CarModel extends BaseModel {
  @Column({ type: 'int' })
  carMakeId: number;

  @ManyToOne(() => CarMake)
  @JoinColumn({ name: 'carMakeId' })
  carMake: Relation<CarMake>;

  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;
}
