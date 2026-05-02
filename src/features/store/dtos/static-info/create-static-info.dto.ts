import { IsEmail, IsString, Length } from 'class-validator';

export class CreateStaticInfoDto {
  @IsString()
  @Length(1, 128)
  address: string;

  @IsString()
  @Length(1, 16)
  phoneNumber: string;

  @IsString()
  @Length(1, 128)
  workingHours: string;

  @IsEmail()
  @Length(1, 64)
  email: string;
}
