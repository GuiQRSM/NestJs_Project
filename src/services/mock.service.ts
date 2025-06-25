import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateMockInputDTO } from 'src/DTOs/MockDTO/CreateMockInput.dto';
import { UpdateMockInputDTO } from 'src/DTOs/MockDTO/UpdateMockInput.dto';

@Injectable()
export class MockService {
  private mocks = [
    {
      id: 1,
      name: 'mock1',
      age: '23',
      email: 'erdf@tt.com',
      password: '8745',
    },
    {
      id: 2,
      name: 'mock2',
      age: '33',
      email: 'oipl@tt.com',
      password: '9845',
    },
    {
      id: 3,
      name: 'mock3',
      age: '26',
      email: 'yutf@tt.com',
      password: '2531',
    },
    {
      id: 4,
      name: 'mock4',
      age: '43',
      email: 'refg@tt.com',
      password: '6743',
    },
  ];

  findAll(id: number) {
    if (id) {
      const mocksC = this.mocks.find((mock) => mock.id === id);
      const verifyNull = [mocksC].filter((mock) => mock !== null);
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
      throw new BadRequestException('Email Added, try other!');
    }
    const lastMock = this.mocks[this.mocks.length - 1];
    const newMock = {
      id: lastMock.id + 1,
      ...body,
    };
    this.mocks.push(newMock);
    return newMock;
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
    return { message: 'Mock deleted' };
  }
}
