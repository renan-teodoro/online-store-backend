import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column({ name: 'name', nullable: false })
  name!: string;

  @Column({ name: 'age' })
  age?: number;

  @Column({ name: 'email', nullable: false })
  email!: string;

  @Column({ name: 'password', nullable: false })
  password!: string;

  @Column({ name: 'phoneNumber', nullable: false })
  phoneNumber!: string;

  @Column({ name: 'address', nullable: false })
  address!: string;

  @Column({ name: 'city', nullable: false })
  city!: string;

  @Column({ name: 'state', nullable: false })
  state!: string;

  @Column({ name: 'country', nullable: false })
  country!: string;

  @Column({ name: 'postalCode', nullable: false })
  postalCode!: string;

  @Column({ name: 'document', nullable: false })
  document!: string;

  @Column({ name: 'documentType', nullable: false })
  documentType!: string;
}
