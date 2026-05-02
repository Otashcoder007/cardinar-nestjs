import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { CreateMaterialDto } from './create-material.dto';

export class ListMaterialDto extends PartialType(CreateMaterialDto) {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  id?: number;
}
