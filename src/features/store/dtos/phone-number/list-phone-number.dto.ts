import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';
import { CreatePhoneNumberDto } from './create-phone-number.dto';

export class ListPhoneNumberDto extends PartialType(CreatePhoneNumberDto) {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  id?: number;
}
