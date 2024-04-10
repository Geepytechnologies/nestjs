import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  CreateUserDto,
  LoginDTO,
  LoginResponseDTO,
  UserDto,
} from 'src/dto/createUserDTO';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ApiBody, ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private jwtService: JwtService,
  ) {}

  @Post('/login')
  async login(
    @Body()
    logindto: LoginDTO,
  ): Promise<LoginResponseDTO> {
    const { email, password } = logindto;
    const user = await this.userService.findUserByEmail(email);
    const isMatch = await bcrypt.compare(password, user?.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user._id, email: user.email };
    const accessToken = await this.jwtService.signAsync(payload);
    const { password: userpass, ...result } = user.toObject();
    return { result, accessToken };
  }
  @Post('/register')
  @ApiBody({ type: CreateUserDto })
  async register(@Body() createUserDto: CreateUserDto): Promise<UserDto> {
    const { firstname, lastname, phone, country, email, password } =
      createUserDto;
    const existingUser = await this.userService.findUserByEmail(email);
    if (existingUser) {
      throw new BadRequestException('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.userService.createUser(
      firstname,
      lastname,
      email,
      phone,
      country,
      hashedPassword,
    );
    return {
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      phone: user.phone,
      country: user.country,
    };
  }
}
