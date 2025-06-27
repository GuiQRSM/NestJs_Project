import { Module } from '@nestjs/common';
import { MockService } from 'src/Mock/mock.service';
import { MockController } from 'src/Mock/mock.controller';

@Module({
  controllers: [MockController],
  providers: [MockService],
})
export class MockModule {}
