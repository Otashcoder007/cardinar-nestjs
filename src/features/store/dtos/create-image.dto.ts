import { Type } from 'class-transformer';
import { IsInt, IsString, Length, Min } from 'class-validator';

export class CreateImageDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  productId: number;

  @IsString()
  @Length(1, 256)
  image: string;

  @Type(() => Number)
  @IsInt()
  @Min(0)
  position: number;
}
