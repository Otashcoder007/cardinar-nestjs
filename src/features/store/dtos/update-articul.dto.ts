import { PartialType } from '@nestjs/mapped-types';
import { CreateArticulDto } from './create-articul.dto';

export class UpdateArticulDto extends PartialType(CreateArticulDto) {}
