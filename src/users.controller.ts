import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller()
export class UsersControllers {
  @Get('/users')
  findAll(@Query('id') id: number) {
    if (id) {
      return `Method findAll with ${id}!`;
    }
    return 'Method findAll!';
  }

  @Get('/users/:id')
  findById(@Param('id') id: number) {
    return id;
  }

  @Post('/users')
  create() {
    return 'created user!';
  }

  @Put('/users/:id')
  update(@Param('id') id: number) {
    return `Updsted user of id:${id}`;
  }

  @Delete('/users/:id')
  delete(@Param('id') id: number) {
    return `Deleted user od id:${id}`;
  }
}
