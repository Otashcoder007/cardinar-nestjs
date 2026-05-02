import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { CreateCategoryDto } from './create-category.dto';

export class ListCategoryDto extends PartialType(CreateCategoryDto) {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  id?: number;
}
