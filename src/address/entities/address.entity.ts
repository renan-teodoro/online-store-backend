import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'address' })
export class AddressEntity {
  @PrimaryGeneratedColumn('rowid')
  id!: number;

  @Column({ name: 'user_id', nullable: false })
  userId!: string;

  @Column({ name: 'complement', nullable: true })
  complement?: string;

  @Column({ name: 'number', nullable: false })
  numberAddress!: string;

  @Column({ name: 'zip_code', nullable: false })
  zip!: string;

  @Column({ name: 'city_id', nullable: false })
  cityId!: number;

  @CreateDateColumn({ name: 'created_at' })
  CreatedAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  UpdatedAt!: Date;
}
