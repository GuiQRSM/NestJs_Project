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
import { ApiTags } from '@nestjs/swagger';
import { CreateUserInputDTO } from 'src/User/UserDTO/CreateUserInput.dto';
import { UpdateUserInputDTO } from 'src/User/UserDTO/UpdateUserInput.dto';
import { UserService } from 'src/User/user.service';

@ApiTags('Users')
@Controller('/users')
export class UsersControllers {
  constructor(private usersService: UserService) {}

  @Get('/')
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.usersService.findAll(id);
  }

  @Get('/:id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findById(id);
  }

  @Post('/')
  create(@Body() body: CreateUserInputDTO) {
    return this.usersService.create(body);
  }

  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserInputDTO,
  ) {
    return this.usersService.update(id, body);
  }

  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
