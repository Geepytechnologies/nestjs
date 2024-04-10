import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from './user.schema';
import { Payments } from './payments.schema';

export type InvestmentDocument = HydratedDocument<Investment>;

enum InvestmentType {
  private_equity = 'private equity',
  fixed_portfolio = 'fixed portfolios',
  digital_investing = 'digital invesing',
}

@Schema()
export class Investment {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: String, enum: InvestmentType })
  type: string;

  @Prop({ type: Types.ObjectId, ref: 'Payments' })
  payment: Payments;
}

export const InvestmentSchema = SchemaFactory.createForClass(Investment);
