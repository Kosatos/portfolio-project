import { UserEntity } from '@/users/user.entity';
import { CreateUserInput } from '@/users/inputs/create-user.input';
import { UpdateUserInput } from '@/users/inputs/update-user.input';
import { UserService } from '@/users/user.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver('User')
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => UserEntity)
  async createUser(
    @Args('createUser') input: CreateUserInput,
  ): Promise<UserEntity> {
    return await this.userService.createUser(input);
  }

  @Mutation(() => UserEntity)
  async updateUser(
    @Args('updateUser') input: UpdateUserInput,
  ): Promise<UserEntity | null> {
    return await this.userService.updateUser(input);
  }

  @Mutation(() => Number)
  async removeUser(@Args('id') id: number): Promise<number> {
    return await this.userService.removeUser(id);
  }

  @Query(() => UserEntity)
  async getOneUser(@Args('id') id: number): Promise<UserEntity | null> {
    return await this.userService.getOneUser(id);
  }

  @Query(() => [UserEntity])
  async getAllUsers(): Promise<UserEntity[]> {
    return await this.userService.getAllUsers();
  }
}
