import { PartialType } from '@nestjs/mapped-types';
import { CreateCarMakeDto } from './create-car-make.dto';

export class UpdateCarMakeDto extends PartialType(CreateCarMakeDto) {}
