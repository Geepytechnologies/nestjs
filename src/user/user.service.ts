import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) public readonly userModel: Model<User>) {}
  async createUser(
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    country: string,
    password: string,
  ): Promise<User> {
    const user = new this.userModel({
      firstname,
      lastname,
      email,
      phone,
      country,
      password,
    });
    return user.save();
  }
  findUserByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
