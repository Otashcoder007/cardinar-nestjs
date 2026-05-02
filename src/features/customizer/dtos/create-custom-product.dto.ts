import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { Category } from '../../../core/enums';

export class CreateCustomProductDto {
  @IsString()
  @Length(1, 64)
  fullName: string;

  @IsString()
  @Length(1, 16)
  phoneNumber: string;

  @IsOptional()
  @IsEmail()
  @Length(1, 64)
  email?: string;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  carMakeId: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  carModelId: number;

  @IsEnum(Category)
  category: Category;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  modelId: number;

  @Type(() => Boolean)
  @IsBoolean()
  withLogo: boolean;

  @IsString()
  @Length(1, 256)
  image: string;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isActive?: boolean;
}
