import { CreateCustomModelCommand } from './create-custom-model.command';
import { CreateCustomModelResponse } from './create-custom-model.response';
import { ILike, QueryFailedError, Repository } from 'typeorm';
import { BadRequestException, ConflictException } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CustomModel } from '../../custom-model.entity';
import { InjectRepository } from '@nestjs/typeorm';

@CommandHandler(CreateCustomModelCommand)
export class CreateCustomModelHandler implements ICommandHandler<CreateCustomModelCommand> {
  constructor(
    @InjectRepository(CustomModel)
    private readonly customModelRepository: Repository<CustomModel>,
  ) {}

  async execute(command: CreateCustomModelCommand): Promise<CreateCustomModelResponse> {
    const title = command.title.trim();
    const image = command.image.trim();

    const alreadyExists = await this.customModelRepository.existsBy({ title: ILike(title) });
    if (alreadyExists) throw new BadRequestException('Title is already taken');

    const newCustomModel = this.customModelRepository.create({
      category: command.category,
      title,
      image,
    });
    await this.saveCustomModel(newCustomModel);

    return plainToInstance(CreateCustomModelResponse, newCustomModel, {
      excludeExtraneousValues: true,
    });
  }

  private async saveCustomModel(customModel: CustomModel): Promise<void> {
    try {
      await this.customModelRepository.save(customModel);
    } catch (error) {
      if (error instanceof QueryFailedError && (error.driverError as { code?: string }).code === '23505') {
        throw new ConflictException('Title is already taken');
      }

      throw error;
    }
  }
}
