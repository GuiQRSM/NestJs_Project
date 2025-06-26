import { Module } from '@nestjs/common';
import { UserService } from 'src/User/user.service';
import { UsersControllers } from 'src/User/users.controller';

@Module({
  controllers: [UsersControllers],
  providers: [UserService],
})
export class UserModule {}
