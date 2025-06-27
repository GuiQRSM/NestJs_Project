import { Module } from '@nestjs/common';
import { TestService } from 'src/Teste/test.service';
import { Testecontroller } from 'src/Teste/teste.controller';

@Module({
  controllers: [Testecontroller],
  providers: [TestService],
})
export class TestModule {}
