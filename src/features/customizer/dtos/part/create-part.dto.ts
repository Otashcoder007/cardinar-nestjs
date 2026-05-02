import { Type } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Category, Parts } from '../../../../core/enums';

export class CreatePartDto {
  @IsEnum(Category)
  category: Category;

  @IsEnum(Parts)
  parts: Parts;

  @IsOptional()
  @IsString()
  @Length(1, 128)
  title?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  materialId: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  colorId: number;

  @IsString()
  @Length(1, 256)
  image: string;
}
