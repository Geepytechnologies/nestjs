import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(): string {
    return 'register user!';
  }
  login(): string {
    return 'login user!';
  }
}
