import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { CreateCarModelDto } from './create-car-model.dto';

export class ListCarModelDto extends PartialType(CreateCarModelDto) {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  id?: number;
}
