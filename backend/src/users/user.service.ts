import { UserEntity } from '@/users/user.entity';
import { CreateUserInput } from '@/users/inputs/create-user.input';
import { UpdateUserInput } from '@/users/inputs/update-user.input';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async createUser(input: CreateUserInput): Promise<UserEntity> {
    return await this.userRepository.save({ ...input });
  }

  async getOneUser(id: number): Promise<UserEntity | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async removeUser(id: number): Promise<number> {
    await this.userRepository.delete({ id });
    return id;
  }

  async updateUser(input: UpdateUserInput): Promise<UserEntity | null> {
    await this.userRepository.update({ id: input.id }, { ...input });
    return await this.getOneUser(input.id);
  }
}
