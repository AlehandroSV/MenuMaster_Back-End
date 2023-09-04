import {
  IsString,
  IsEmail,
  MinLength,
  Matches,
  IsBoolean,
} from 'class-validator';

export class CreateAdminDto {
  @IsString()
  readonly name: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(4)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  readonly password: string;

  @IsBoolean()
  readonly isAdminPrincipal: boolean = false;
}
