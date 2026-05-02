import { IsString, Length } from 'class-validator';

export class CreatePhoneNumberDto {
  @IsString()
  @Length(1, 16)
  phoneNumber: string;
}
