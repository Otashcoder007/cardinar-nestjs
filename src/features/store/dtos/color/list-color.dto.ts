import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { CreateColorDto } from './create-color.dto';

export class ListColorDto extends PartialType(CreateColorDto) {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  id?: number;
}
