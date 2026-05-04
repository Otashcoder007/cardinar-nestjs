import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Command } from '@nestjs/cqrs';
import { CreateCustomModelResponse } from './create-custom-model.response';
import { Category } from '../../../../../core/enums';

export class CreateCustomModelCommand extends Command<CreateCustomModelResponse> {
  @IsEnum(Category)
  @ApiProperty({ enum: Category })
  category!: Category;

  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  @ApiProperty()
  title!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  @ApiProperty()
  image!: string;
}
