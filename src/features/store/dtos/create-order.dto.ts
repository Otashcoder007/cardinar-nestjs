import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Length,
  Min,
} from 'class-validator';
import { OrderStatus, PaymentMethod } from '../../../core/enums';

export class CreateOrderDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  userId: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  branchId: number;

  @IsString()
  @Length(1, 64)
  fullName: string;

  @IsString()
  @Length(1, 16)
  phoneNumber: string;

  @IsOptional()
  @IsEmail()
  @Length(1, 64)
  email?: string;

  @Type(() => Boolean)
  @IsBoolean()
  delivery: boolean;

  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @IsEnum(OrderStatus)
  status: OrderStatus;
}
