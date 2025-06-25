import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersControllers } from 'src/User/users.controller';
import { AppController } from 'src/app.controller';
import { TesteController } from 'src/Teste/test.controller';
import { UserService } from 'src/services/user.service';
import { MockController } from 'src/Teste/mock.controller';
import { MockService } from 'src/services/mock.service';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersControllers,
    TesteController,
    MockController,
  ],
  providers: [AppService, UserService, MockService],
})
export class AppModule {}
