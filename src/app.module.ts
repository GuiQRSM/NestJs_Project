import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersControllers } from 'src/User/users.controller';
import { AppController } from 'src/app.controller';
import { TesteController } from 'src/Teste/test.controller';
import { MockController } from 'src/Teste/mock.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersControllers,
    TesteController,
    MockController,
  ],
  providers: [AppService],
})
export class AppModule {}
