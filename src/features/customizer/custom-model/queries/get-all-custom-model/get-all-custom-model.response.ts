import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Category } from '../../../../../core/enums';

export class GetAllCustomModelResponse {
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

  @Expose()
  @ApiProperty()
  created!: string;
}
