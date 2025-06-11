import {
  Body,
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
import { CreateUserInputDTO } from 'src/DTOs/UserDTO/CreateUserInput.dto';
import { UpdateUserInputDTO } from 'src/DTOs/UserDTO/UpdateUserInput.dto';

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
  create(@Body() body: CreateUserInputDTO) {
    return body;
  }

  @Put('/:id')
  update(@Param('id') id: number, @Body() body: UpdateUserInputDTO) {
    return body;
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return `Deleted user od id:${id}`;
  }
}
