import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOfRounds = 11;
    const hashedPassword = await bcrypt.hash(
      createUserDto.password,
      saltOfRounds,
    );

    const isPasswordMatching =
      createUserDto.password === createUserDto.confirmPassword;

    if (!isPasswordMatching) {
      throw new Error('Passwords do not match');
    }

    return this.userRepository.save({
      ...createUserDto,
      typeUser: 'common',
      password: hashedPassword,
      confirmPassword: undefined,
    });
  }

  getAllUsers(): Promise<UserEntity[]> {
    const allUsers = this.userRepository.find();
    return Promise.resolve(allUsers);
  }
}
