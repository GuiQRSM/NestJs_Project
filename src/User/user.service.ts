import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserInputDTO } from 'src/User/UserDTO/CreateUserInput.dto';
import { UpdateUserInputDTO } from 'src/User/UserDTO/UpdateUserInput.dto';
@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(id: number) {
    if (id) {
      const users = await this.prisma.user.findUnique({ where: { id } });
      return users;
    }
    const users = await this.prisma.user.findMany();
    return users;
  }

  async findById(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (user) return user;
    throw new NotFoundException();
  }

  async create(body: CreateUserInputDTO) {
    //analisa se email já é cadastrado!
    const user = await this.prisma.user.findUnique({
      where: { email: body.email },
    });
    if (user) {
      throw new BadRequestException('Email já cadastrado!');
    }
    //  cria o novo usuário no banco com os dados do body.
    const newUser = await this.prisma.user.create({
      data: body,
    });
    //Adiciona o novo usuário ao final da lista this.users
    return newUser;
  }

  async update(id: number, body: UpdateUserInputDTO) {
    const user = await this.findById(id);
    if (!user) throw new NotFoundException();
    //
    const alterUser = await this.prisma.user.update({
      where: { id },
      data: body,
    });
    return alterUser;
  }

  async delete(id: number) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException();
    await this.prisma.user.delete({ where: { id } });
    return { message: 'Usuário deletado!' };
  }
}
