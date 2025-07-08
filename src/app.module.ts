import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { AppController } from 'src/app.controller';
import { UserModule } from 'src/User/user.module';
import { TestModule } from 'src/Teste/test.module';
import { MockModule } from 'src/Mock/mock.module';
import { ClientModule } from 'src/clientes/cliente.module';
import { ProductsModule } from './products/products.module';
import { CarsModule } from 'src/cars/cars.module';

@Module({
  imports: [
    UserModule,
    TestModule,
    MockModule,
    ClientModule,
    ProductsModule,
    CarsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
