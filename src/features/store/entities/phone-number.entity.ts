import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('phoneNumbers')
export class PhoneNumber {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 16, unique: true })
  phoneNumber: string;
}
