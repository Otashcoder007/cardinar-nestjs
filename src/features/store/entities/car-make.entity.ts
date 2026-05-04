import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('carMakes')
export class CarMake extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;
}
