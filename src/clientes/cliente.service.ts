import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientInputDTO } from 'src/clientes/DTO/CreateClientInput.dto';
import { UpdateClientInoutDTO } from 'src/clientes/DTO/UpdateClientInput.dto';

@Injectable()
export class ClientService {
  private clients = [
    {
      id: 1,
      nome: 'Ana Souza',
      email: 'ana.souza@example.com',
      password: 'SenhaForte123',
    },
    {
      id: 2,
      nome: 'Carlos Lima',
      email: 'carlos.lima@example.com',
      password: 'Carlos@2025',
    },
    {
      id: 3,
      nome: 'Fernanda Oliveira',
      email: 'fernanda.oliveira@example.com',
      password: 'Fernanda!321',
    },
    {
      id: 4,
      nome: 'João Mendes',
      email: 'joao.mendes@example.com',
      password: 'JoaoSenha#456',
    },
  ];

  findAll(id: number) {
    if (id) {
      const clientC = this.clients.find((client) => client.id === id);
      const verifyNull = [clientC].filter((client) => client?.id == null);
      return verifyNull;
    }
    return this.clients;
  }

  finById(id: number) {
    const clientC = this.clients.find((client) => client.id === id);
    if (clientC) return clientC;
    throw new NotFoundException();
  }

  create(body: CreateClientInputDTO) {
    const clientC = this.clients.find((client) => client.email === body.email);
    if (clientC) {
      throw new BadRequestException('Email já cadastrado!');
    }
    const lastClient = this.clients[this.clients.length - 1];
    const newClient = {
      id: lastClient.id + 1,
      ...body,
    };
    this.clients.push(newClient);
    return newClient;
  }

  update(id: number, body: UpdateClientInoutDTO) {
    const clientC = this.clients.find((client) => client.id === id);
    if (!clientC) throw new NotFoundException();
    this.clients.map((client) => {
      if (client.id === id) {
        return { ...client, ...body };
      }
      return client;
    });
    return {
      ...clientC,
      ...body,
    };
  }

  delete(id: number) {
    const clientC = this.clients.find((client) => client.id === id);
    if (!clientC) throw new NotFoundException();
    this.clients = this.clients.filter((client) => client.id !== id);
    return { message: 'Cliente deletado!' };
  }
}
