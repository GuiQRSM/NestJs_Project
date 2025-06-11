import {
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('/test')
export class TestController {
  @Get('/')
  findAll(
    @Query('id', new DefaultValuePipe(1), new ParseIntPipe()) id: number,
  ) {
    console.log(typeof id);
    if (id) {
      return `Return this methos findAll! with id:${id}!`;
    }
    return 'Return this methos findAll!';
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return id;
  }

  @Post('/')
  create() {
    return 'Created a user';
  }

  @Put('/:id')
  update(@Param('id') id: number) {
    return `Updated this user with id:${id}!`;
  }

  @Patch('/:id')
  patchUpdate(@Param('id') id: number) {
    return `Updated partielly this user with id:${id}!`;
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return `Deleted user with id:${id}!`;
  }
}
