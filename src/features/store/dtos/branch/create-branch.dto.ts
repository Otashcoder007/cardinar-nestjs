import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { BranchType } from '../../../../core/enums';

export class CreateBranchDto {
  @IsString()
  @Length(1, 128)
  title: string;

  @IsString()
  @Length(1, 128)
  address: string;

  @IsOptional()
  @IsString()
  @Length(1, 64)
  district?: string;

  @IsString()
  @Length(1, 64)
  region: string;

  @IsString()
  @Length(1, 16)
  phoneNumber: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 9 })
  longitude: number;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 9 })
  latitude: number;

  @IsOptional()
  @Type(() => Boolean)
  @IsBoolean()
  isActive?: boolean;

  @IsEnum(BranchType)
  branchType: BranchType;
}
