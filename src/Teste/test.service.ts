import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTestInputDTO } from 'src/Teste/TesteDTO/CreateTestInput.dto';
import { UpdateTestInputDTO } from 'src/Teste/TesteDTO/UpdateTestInput.dto';

@Injectable()
export class TestService {
  private testes = [
    {
      id: 1,
      name: 'test1',
      email: 'tst1@gmail.com',
      password: '8563',
    },
    {
      id: 2,
      name: 'test2',
      email: 'tst2@gmail.com',
      password: '8597',
    },
    {
      id: 3,
      name: 'test3',
      email: 'tst3@gmail.com',
      password: '0325',
    },
    {
      id: 4,
      name: 'test4',
      email: 'tst4@gmail.com',
      password: '9531',
    },
  ];

  findAll(id: number) {
    if (id) {
      const testC = this.testes.find((test) => test.id === id);
      const verifyNull = [testC].filter((test) => test?.id !== null);
      return verifyNull;
    }
    return this.testes;
  }

  findById(id: number) {
    const testC = this.testes.find((test) => test.id === id);
    if (testC) return testC;
    throw new NotFoundException();
  }

  create(body: CreateTestInputDTO) {
    const lastTest = this.testes[this.testes.length - 1];
    const newTest = {
      id: lastTest.id + 1,
      ...body,
    };
    this.testes.push(newTest);
  }

  update(id: number, body: UpdateTestInputDTO) {
    const testC = this.testes.find((test) => test.id === id);
    if (!testC) throw new NotFoundException();
    this.testes.map((test) => {
      if (test.id === id) {
        return { ...test, ...body };
      }
      return test;
    });
    return {
      ...testC,
      ...body,
    };
  }

  delete(id: number) {
    const testC = this.testes.find((test) => test.id === id);
    if (!testC) throw new NotFoundException();
    this.testes = this.testes.filter((test) => test.id !== id);
    return { message: 'Deleted Test' };
  }
}
