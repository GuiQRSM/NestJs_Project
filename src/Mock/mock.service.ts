import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMockInputDTO } from 'src/Mock/MockDTO/CreateMockInput.dto';
import { UpdateMockInputDTO } from 'src/Mock/MockDTO/UpdateMockInput.dto';

@Injectable()
export class MockService {
  private mocks = [
    {
      id: 1,
      name: 'mock1',
      email: 'mock1@gmail.com',
      password: '8563',
    },
    {
      id: 2,
      name: 'mock2',
      email: 'mock2@gmail.com',
      password: '8597',
    },
    {
      id: 3,
      name: 'mock3',
      email: 'mock3@gmail.com',
      password: '0325',
    },
    {
      id: 4,
      name: 'mock4',
      email: 'mock4@gmail.com',
      password: '9531',
    },
  ];

  findAll(id: number) {
    if (id) {
      const mocksC = this.mocks.find((mock) => mock.id === id);
      const verifyNull = [mocksC].filter((mock) => mock?.id !== id);
      return verifyNull;
    }
    return this.mocks;
  }

  findById(id: number) {
    const mocksC = this.mocks.find((mock) => mock.id === id);
    if (mocksC) return mocksC;
    throw new NotFoundException();
  }

  create(body: CreateMockInputDTO) {
    const mocksC = this.mocks.find((mock) => mock.email === body.email);
    if (mocksC) {
      throw new BadRequestException('Email already exists!');
    }
    const lastMock = this.mocks[this.mocks.length - 1];
    const newMock = {
      id: lastMock.id + 1,
      ...body,
    };
    this.mocks.push(newMock);
  }

  update(id: number, body: UpdateMockInputDTO) {
    const mocksC = this.mocks.find((mock) => mock.id === id);
    if (!mocksC) throw new NotFoundException();
    this.mocks.map((mock) => {
      if (mock.id === id) {
        return { ...mock, ...body };
      }
      return mock;
    });
    return {
      ...mocksC,
      ...body,
    };
  }

  delete(id: number) {
    const mocksC = this.mocks.find((mock) => mock.id === id);
    if (!mocksC) throw new NotFoundException();
    this.mocks = this.mocks.filter((mock) => mock.id !== id);
    return { message: 'Mock deleted!' };
  }
}
