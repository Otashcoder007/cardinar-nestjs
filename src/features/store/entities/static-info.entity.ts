import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('staticInfo')
export class StaticInfo extends BaseModel {
  @Column({ type: 'varchar', length: 128 })
  address: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 128 })
  workingHours: string;

  @Column({ type: 'varchar', length: 64 })
  email: string;
}
