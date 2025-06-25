import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserInputDTO } from 'src/DTOs/UserDTO/CreateUserInput.dto';
import { UpdateUserInputDTO } from 'src/DTOs/UserDTO/UpdateUserInput.dto';

@Injectable()
export class UserService {
  private users = [
    {
      id: 1,
      name: 'Jamil',
      email: 'jam@gmail.com',
      password: '1234',
    },
    {
      id: 2,
      name: 'Cleo',
      email: 'cleo@gmail.com',
      password: '4321',
    },
    {
      id: 3,
      name: 'Caio',
      email: 'caio@gmail.com',
      password: '8583',
    },
  ];

  findAll(id: number) {
    if (id) {
      const users = this.users.find((user) => user.id === id);
      const user = [users].filter((user) => user != null);
      return user;
    }
    return this.users;
  }

  findById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (user) return user;
    throw new NotFoundException();
  }

  create(body: CreateUserInputDTO) {
    //analisa se email já é cadastrado!
    const user = this.users.find((user) => user.email === body.email);
    if (user) {
      throw new BadRequestException('Email já cadastrado!');
    }
    // 59: Acessa o ultimo elemento de this.users
    const lastUser = this.users[this.users.length - 1];
    // cria um novo objeto  de usuario
    const newUsers = {
      id: lastUser.id + 1,
      ...body,
    };
    //Adiciona o novo usuário ao final da lista this.users
    this.users.push(newUsers);
    return newUsers;
  }

  update(id: number, body: UpdateUserInputDTO) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException();
    //O map() está sendo usado para criar um novo array com os dados atualizados.
    this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...body };
      }
      return user;
    });
    return {
      ...user,
      ...body,
    };
  }

  delete(id: number) {
    const user = this.users.find((user) => user.id !== id);
    if (!user) throw new NotFoundException();
    this.users = this.users.filter((user) => user.id !== id);
    return { message: 'User deleted!' };
  }
}
