import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return {
      ...createUser,
      password: undefined,
      confirmPassword: undefined,
    };
  }

  @Get()
  async getAllUsers() {
    const users = await Promise.resolve([{ name: 'John Doe', age: 30 }]);
    return JSON.stringify(users);
  }
}
