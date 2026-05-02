import { Type } from 'class-transformer';
import {
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';

export class CreateRequestDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  userId?: number;

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

  @IsOptional()
  @IsString()
  @Length(1, 2000)
  comments?: string;
}
