import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from 'src/app.controller';
import { MockController } from 'src/Teste/mock.controller';
import { MockService } from 'src/services/mock.service';
import { Testecontroller } from 'src/Teste/teste.controller';
import { TestService } from 'src/services/test.service';
import { UserModule } from 'src/User/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController, MockController, Testecontroller],
  providers: [AppService, MockService, TestService],
})
export class AppModule {}
