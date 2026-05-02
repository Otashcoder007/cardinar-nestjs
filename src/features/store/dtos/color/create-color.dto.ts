import { IsString, Length } from 'class-validator';

export class CreateColorDto {
  @IsString()
  @Length(1, 64)
  title: string;

  @IsString()
  @Length(1, 12)
  color: string;
}
