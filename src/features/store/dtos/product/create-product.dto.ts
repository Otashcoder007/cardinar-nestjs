import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Status } from '../../../../core/enums';

export class CreateProductDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  categoryId: number;

  @IsString()
  @Length(1, 128)
  title: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  price: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isPremium?: boolean;
}
