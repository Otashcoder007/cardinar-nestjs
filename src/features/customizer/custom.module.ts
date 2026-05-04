import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomModelController } from './custom-model/custom-model.controller';
import { GetAllCustomModelHandler } from './custom-model/queries/get-all-custom-model/get-all-custom-model.handler';
import { CreateCustomModelHandler } from './custom-model/commands/create-custom-model/create-custom-model.handler';
import { DeleteCustomModelHandler } from './custom-model/commands/delete-custom-model/delete-custom-model.handler';
import { CustomModel } from './custom-model/custom-model.entity';
import { CustomProduct } from './entities/custom-product.entity';

const commandHandlers = [CreateCustomModelHandler, DeleteCustomModelHandler];
const queryHandlers = [GetAllCustomModelHandler];

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([CustomModel, CustomProduct])],
  controllers: [CustomModelController],
  providers: [...commandHandlers, ...queryHandlers],
})
export class CustomModule {}
