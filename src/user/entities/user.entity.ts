import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'type_user', nullable: false })
  typeUser!: string;

  @Column({ name: 'name', nullable: false })
  name!: string;

  @Column({ name: 'age' })
  age?: number;

  @Column({ name: 'email', nullable: false })
  email!: string;

  @Column({ name: 'password', nullable: false })
  password!: string;

  @Column({ name: 'phone_number', nullable: false })
  phoneNumber!: string;

  @Column({ name: 'document', nullable: false })
  document!: string;

  @Column({ name: 'document_type', nullable: false })
  documentType!: string;

  @CreateDateColumn({ name: 'created_at' })
  CreatedAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  UpdatedAt!: Date;
}
