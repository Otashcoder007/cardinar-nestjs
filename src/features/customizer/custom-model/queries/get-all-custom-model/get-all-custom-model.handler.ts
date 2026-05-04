import { plainToInstance } from 'class-transformer';

import { GetAllCustomModelQuery } from './get-all-custom-model.query';
import { GetAllCustomModelResponse } from './get-all-custom-model.response';
import type { IQueryHandler } from '@nestjs/cqrs';
import { QueryHandler } from '@nestjs/cqrs';
import { CustomModel } from '../../custom-model.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@QueryHandler(GetAllCustomModelQuery)
export class GetAllCustomModelHandler implements IQueryHandler<GetAllCustomModelQuery> {
  constructor(
    @InjectRepository(CustomModel)
    private readonly customModelRepository: Repository<CustomModel>,
  ) {}

  async execute(query: GetAllCustomModelQuery): Promise<GetAllCustomModelResponse[]> {
    const take = query.filters.size ?? 10;
    const currentPage = query.filters.page ?? 1;
    const skip = (currentPage - 1) * take;

    const customModels = await this.customModelRepository.find({
      order: { created: 'DESC' },
      skip,
      take,
    });
    return plainToInstance(GetAllCustomModelResponse, customModels, {
      excludeExtraneousValues: true,
    });
  }
}
