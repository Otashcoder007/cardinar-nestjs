import { Type } from 'class-transformer';
import { IsBoolean, IsString, Length } from 'class-validator';

export class CreateBannerDto {
  @IsString()
  @Length(1, 128)
  title: string;

  @IsString()
  @Length(1, 256)
  image: string;

  @Type(() => Boolean)
  @IsBoolean()
  isActive: boolean;
}
