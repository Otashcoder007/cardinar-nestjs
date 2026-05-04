import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { GetAllCustomModelResponse } from './queries/get-all-custom-model/get-all-custom-model.response';
import { GetAllCustomModelFilters } from './queries/get-all-custom-model/get-all-custom-model.filters';
import { GetAllCustomModelQuery } from './queries/get-all-custom-model/get-all-custom-model.query';
import { CreateCustomModelResponse } from './commands/create-custom-model/create-custom-model.response';
import { CreateCustomModelCommand } from './commands/create-custom-model/create-custom-model.command';
import { DeleteCustomModelCommand } from './commands/delete-custom-model/delete-custom-model.command';

@Controller('custom-model')
export class CustomModelController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queriesBus: QueryBus,
  ) {}
  @Get()
  @ApiOkResponse({ type: [GetAllCustomModelResponse] })
  async getAllCustomModel(@Query() filters: GetAllCustomModelFilters) {
    return await this.queriesBus.execute(new GetAllCustomModelQuery(filters));
  }

  @Post()
  @ApiCreatedResponse({ type: CreateCustomModelResponse })
  async createCustomModel(@Body() command: CreateCustomModelCommand) {
    return await this.commandBus.execute(command);
  }

  @Delete(':id')
  async deleteCustomModel(@Param('id', ParseIntPipe) id: number) {
    const cmd = new DeleteCustomModelCommand();
    cmd.id = id;
    return await this.commandBus.execute(cmd);
  }
}
