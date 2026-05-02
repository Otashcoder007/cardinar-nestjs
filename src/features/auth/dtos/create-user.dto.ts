import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1, 64)
  fullName: string;

  @IsString()
  @Length(1, 16)
  phoneNumber: string;

  @IsEmail()
  @Length(1, 64)
  email: string;

  @IsString()
  @Length(1, 128)
  password: string;
}
