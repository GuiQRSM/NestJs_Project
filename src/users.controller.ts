import {
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('/users')
export class UsersControllers {
  @Get('/')
  findAll(@Query('id', new DefaultValuePipe(1), ParseIntPipe) id: number) {
    if (id) {
      return `Method findAll with ${id}!`;
    }
    return 'Method findAll!';
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return id;
  }

  @Post('/')
  create() {
    return 'created user!';
  }

  @Put('/:id')
  update(@Param('id') id: number) {
    return `Updsted user of id:${id}`;
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return `Deleted user od id:${id}`;
  }
}
