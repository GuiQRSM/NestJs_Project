import { NotFoundException } from '@nestjs/common';
import { CreateTesteInpuDTO } from 'src/DTOs/TesteDTO/CreateTesteInput.dto';
import { UpdateTesteInputDTO } from 'src/DTOs/TesteDTO/UpdateTesteInput.dto';

export class TestService {
  private testers = [
    {
      id: 1,
      name: 'teste1',
      email: 'tst1@gmail.com',
      password: '1234',
    },
    {
      id: 2,
      name: 'teste2',
      email: 'tst2@gmail.com',
      password: '4321',
    },
    {
      id: 3,
      name: 'teste3',
      email: 'tst3@gmail.com',
      password: '8583',
    },
  ];

  findAll(id: number) {
    if (id) {
      const testes = this.testers.find((test) => test.id === id);
      const teste = [testes].filter((test) => test !== null);
      return teste;
    }
    return this.testers;
  }

  findById(id: number) {
    const testes = this.testers.find((test) => test.id === id);
    if (testes) return testes;
    throw new NotFoundException();
  }

  create(body: CreateTesteInpuDTO) {
    const lastTest = this.testers[this.testers.length - 1];
    const newTest = {
      id: lastTest.id + 1,
      ...body,
    };
    this.testers.push(newTest);
    return newTest;
  }

  update(id: number, body: UpdateTesteInputDTO) {
    const teste = this.testers.find((test) => test.id === id);
    if (!teste) throw new NotFoundException();
    this.testers.map((test) => {
      if (test.id === id) {
        return { ...test, ...body };
      }
      return test;
    });
    return { ...teste, ...body };
  }

  delete(id: number) {
    const testes = this.testers.find((test) => test.id === id);
    if (!testes) throw new NotFoundException();
    this.testers = this.testers.filter((test) => test.id !== id);
    return { message: 'Deleted test!' };
  }
}
