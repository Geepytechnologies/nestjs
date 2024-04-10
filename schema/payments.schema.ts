import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from './user.schema';

export type PaymentsDocument = HydratedDocument<Payments>;

@Schema()
export class Payments {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop()
  amount: string;

  @Prop()
  purpose: string;
}

export const PaymentsSchema = SchemaFactory.createForClass(Payments);
