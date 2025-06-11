import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersControllers } from 'src/users.controller';
import { AppController } from 'src/app.controller';
import { TestController } from 'src/test.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersControllers, TestController],
  providers: [AppService],
})
export class AppModule {}
