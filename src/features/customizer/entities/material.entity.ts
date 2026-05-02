import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('materials')
export class Material {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description: string | null;
}
