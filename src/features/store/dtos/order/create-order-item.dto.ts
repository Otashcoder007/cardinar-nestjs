import { Type } from 'class-transformer';
import { IsInt, IsOptional, Min } from 'class-validator';

export class CreateOrderItemDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  orderId: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  productId: number;

  @Type(() => Number)
  @IsInt()
  @Min(1)
  articulId: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  quantity?: number;
}
