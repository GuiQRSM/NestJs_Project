import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/User/user.service';
import { UsersControllers } from 'src/User/users.controller';

@Module({
  controllers: [UsersControllers],
  providers: [UserService, PrismaService],
})
export class UserModule {}
