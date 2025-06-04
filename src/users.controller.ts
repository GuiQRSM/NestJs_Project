import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller()
export class UsersControllers {
  @Get('/users')
  findAll(@Query('id') id: number) {
    if (id) {
      return `Retorna método de usuario ${id}`;
    }
    return 'Retorna métodp de usuarios';
  }

  @Get('/users/:id')
  findById(@Param('id') id: number) {
    return id;
  }
}
