import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { CreateArticulDto } from './create-articul.dto';

export class ListArticulDto extends PartialType(CreateArticulDto) {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  id?: number;
}
