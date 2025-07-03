import { Module } from '@nestjs/common';
import { clienteController } from 'src/clientes/cliente.controller';
import { ClientService } from 'src/clientes/cliente.service';

@Module({
  controllers: [clienteController],
  providers: [ClientService],
})
export class ClientModule {}
