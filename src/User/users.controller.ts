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
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserInputDTO } from 'src/User/UserDTO/CreateUserInput.dto';
import { UpdateUserInputDTO } from 'src/User/UserDTO/UpdateUserInput.dto';
import { findByIdOutpurDTO } from 'src/User/UserDTO/findByIdOutput.dto';
import { UserService } from 'src/User/user.service';

@ApiTags('Users')
@Controller('/users')
export class UsersControllers {
  constructor(private usersService: UserService) {}

  @Get()
  @ApiQuery({ name: 'id', type: Number, required: false })
  findAll(@Query('id', new DefaultValuePipe(0), ParseIntPipe) id: 0) {
    return this.usersService.findAll(id);
  }

  @Get(':id')
  @ApiResponse({ type: findByIdOutpurDTO, status: 200 })
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.findById(id);
  }

  @Post()
  @ApiResponse({ status: 201 })
  create(@Body() body: CreateUserInputDTO) {
    return this.usersService.create(body);
  }

  @Put(':id')
  @ApiResponse({ status: 200 })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUserInputDTO,
  ) {
    return this.usersService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.delete(id);
  }
}
