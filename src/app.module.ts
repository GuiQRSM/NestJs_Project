import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersControllers } from 'src/users.controller';
import { AppController } from 'src/app.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersControllers],
  providers: [AppService],
})
export class AppModule {}
