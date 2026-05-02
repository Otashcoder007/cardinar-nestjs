import { IsEnum, IsString, Length } from 'class-validator';
import { Category } from '../../../../core/enums';

export class CreateCustomModelDto {
  @IsEnum(Category)
  category: Category;

  @IsString()
  @Length(1, 128)
  title: string;

  @IsString()
  @Length(1, 256)
  image: string;
}
