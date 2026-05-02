import { Type } from 'class-transformer';
import { IsInt, IsString, Length, Min } from 'class-validator';

export class CreateCarModelDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  carMakeId: number;

  @IsString()
  @Length(1, 64)
  title: string;
}
