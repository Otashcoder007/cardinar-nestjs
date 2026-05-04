import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('phoneNumbers')
export class PhoneNumber extends BaseModel {
  @Column({ type: 'varchar', length: 16, unique: true })
  phoneNumber: string;
}
