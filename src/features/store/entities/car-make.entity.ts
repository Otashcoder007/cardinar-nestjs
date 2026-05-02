import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('carMakes')
export class CarMake {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;
}
