import { Column, Entity } from 'typeorm';
import { Category } from '../../../core/enums';
import { BaseModel } from '../../../core/base-model';

@Entity('customModel')
export class CustomModel extends BaseModel {
  @Column({ type: 'enum', enum: Category, enumName: 'category' })
  category: Category;

  @Column({ type: 'varchar', length: 128, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 256 })
  image: string;
}
