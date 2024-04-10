import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  firstname: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  country: string;
}
export class UserDto {
  readonly firstname: string;
  readonly lastname: string;
  readonly email: string;
  readonly phone: string;
  readonly country: string;
}
export class LoginDTO {
  @ApiProperty({ description: 'User email' })
  email: string;

  @ApiProperty({ description: 'User password' })
  password: string;
}
export class LoginResponseDTO {
  result: UserDto;
  accessToken: string;
}
