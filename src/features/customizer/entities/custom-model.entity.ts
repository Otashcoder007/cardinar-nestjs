import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from '../../../core/enums';

@Entity('customModels')
export class CustomModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Category, enumName: 'category' })
  category: Category;

  @Column({ type: 'varchar', length: 128, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 256 })
  image: string;
}
