import { IsOptional, IsString, Length } from 'class-validator';

export class CreateMaterialDto {
  @IsString()
  @Length(1, 64)
  title: string;

  @IsOptional()
  @IsString()
  @Length(1, 512)
  description?: string;
}
