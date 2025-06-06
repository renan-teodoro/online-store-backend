import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'city' })
export class CityEntity {
  @PrimaryGeneratedColumn('rowid')
  id!: number;

  @Column({ name: 'state_id', nullable: false })
  stateId!: number;

  @Column({ name: 'name', nullable: false })
  name!: string;

  @CreateDateColumn({ name: 'created_at' })
  CreatedAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  UpdatedAt!: Date;
}
