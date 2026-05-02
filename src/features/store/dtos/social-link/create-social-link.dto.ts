import { IsString, IsUrl, Length } from 'class-validator';

export class CreateSocialLinkDto {
  @IsString()
  @Length(1, 64)
  title: string;

  @IsUrl({ require_tld: false })
  @Length(1, 256)
  link: string;

  @IsString()
  @Length(1, 128)
  icon: string;
}
