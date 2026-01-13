// src/car/car.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  brand: string;

  @Column({ type: 'varchar', nullable: false })
  model: string;

  @Column({ type: 'int', nullable: false })
  pricePerDay: number;

  @Column({ type: 'varchar', nullable: true })
  img: string;

  @Column({ type: 'varchar', nullable: true })
  sideImg: string;

  @Column({ type: 'varchar', nullable: true })
  power: string;

  @Column({ type: 'varchar', nullable: true })
  torque: string;

  @Column({ type: 'varchar', nullable: true })
  zeroTo100: string;

  @Column({ type: 'varchar', nullable: true })
  topSpeed: string;

  @Column({ type: 'varchar', nullable: true })
  weight: string;

  @Column({ type: 'int', nullable: true })
  year: number;

  @Column({ type: 'varchar', nullable: true })
  superior: string;
}
