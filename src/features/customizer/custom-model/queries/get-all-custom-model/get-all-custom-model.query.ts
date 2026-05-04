import { Query } from '@nestjs/cqrs';
import { GetAllCustomModelResponse } from './get-all-custom-model.response';
import { GetAllCustomModelFilters } from './get-all-custom-model.filters';

export class GetAllCustomModelQuery extends Query<GetAllCustomModelResponse[]> {
  constructor(public readonly filters: GetAllCustomModelFilters) {
    super();
  }
}
