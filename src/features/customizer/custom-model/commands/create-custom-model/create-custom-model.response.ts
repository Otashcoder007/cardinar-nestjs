import { Expose } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from '../../../../../core/enums';

export class CreateCustomModelResponse {
  @Expose()
  @ApiProperty()
  id!: number;

  @Expose()
  @ApiProperty({ enum: Category })
  category!: Category;

  @Expose()
  @ApiProperty()
  title!: string;

  @Expose()
  @ApiProperty()
  image!: string;
}
