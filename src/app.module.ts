import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from 'src/app.controller';
import { TestService } from 'src/Teste/test.service';
import { UserModule } from 'src/User/user.module';
import { TestModule } from 'src/Teste/test.module';

@Module({
  imports: [UserModule, TestModule],
  controllers: [AppController],
  providers: [AppService, TestService],
})
export class AppModule {}
