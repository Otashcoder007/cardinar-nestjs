import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { DeleteCustomModelCommand } from './delete-custom-model.command';
import { CustomModel } from '../../custom-model.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomProduct } from '../../../entities/custom-product.entity';

@CommandHandler(DeleteCustomModelCommand)
export class DeleteCustomModelHandler implements ICommandHandler<DeleteCustomModelCommand> {
  constructor(
    @InjectRepository(CustomModel)
    private readonly customModelRepository: Repository<CustomModel>,
    @InjectRepository(CustomProduct)
    private readonly customProductRepository: Repository<CustomProduct>,
  ) {}

  async execute(cmd: DeleteCustomModelCommand): Promise<void> {
    const customModel = await this.customModelRepository.findOneBy({ id: cmd.id });
    if (!customModel) throw new NotFoundException('Custom model with given id not found');

    const hasAnyAttachedCustomProducts = await this.customProductRepository.existsBy({ modelId: cmd.id });
    if (hasAnyAttachedCustomProducts) {
      throw new BadRequestException('Custom model has attached custom products, move or delete them first');
    }

    await this.customModelRepository.remove(customModel);
  }
}
