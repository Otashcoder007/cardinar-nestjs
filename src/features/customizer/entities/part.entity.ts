import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Category, Parts } from '../../../core/enums';
import { Color } from '../../store/entities/color.entity';
import { Material } from './material.entity';

@Entity('parts')
export class Part {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: Category, enumName: 'category' })
  category: Category;

  @Column({ type: 'enum', enum: Parts, enumName: 'parts' })
  parts: Parts;

  @Column({ type: 'varchar', length: 128, nullable: true })
  title: string | null;

  @Column({ type: 'int' })
  materialId: number;

  @ManyToOne(() => Material)
  @JoinColumn({ name: 'materialId' })
  material: Relation<Material>;

  @Column({ type: 'int' })
  colorId: number;

  @ManyToOne(() => Color)
  @JoinColumn({ name: 'colorId' })
  color: Relation<Color>;

  @Column({ type: 'varchar', length: 256 })
  image: string;
}
