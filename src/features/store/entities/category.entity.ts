import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('categories')
export class Category extends BaseModel {
  @Column({ type: 'varchar', length: 128, unique: true })
  title: string;
}
