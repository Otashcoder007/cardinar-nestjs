import { IsString, Length } from 'class-validator';

export class CreateCarMakeDto {
  @IsString()
  @Length(1, 64)
  title: string;
}
