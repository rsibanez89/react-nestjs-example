import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserRequest } from './dto/user.request';
import { RequestValidationPipe } from 'src/common/request-validation.pipe';
import { UserSchema } from '@shared/contracts/users.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body(new RequestValidationPipe(UserSchema)) createUser: UserRequest) {
    return this.usersService.create(createUser);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id) || new NotFoundException();
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body(new RequestValidationPipe(UserSchema)) updateUser: UserRequest,
  ) {
    return this.usersService.update(+id, updateUser);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
