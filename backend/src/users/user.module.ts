import { UserEntity } from '@/users/user.entity';
import { UserResolver } from '@/users/user.resolver';
import { UserService } from '@/users/user.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UserResolver],
})
export class UserModule {}
