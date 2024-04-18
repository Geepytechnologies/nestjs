import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { User } from './user.schema';
import { Payments } from './payments.schema';

export type InvestmentDocument = HydratedDocument<Investment>;

enum InvestmentType {
  private_equity = 'Private Equity',
  fixed_portfolio = 'Fixed Portfolios',
  digital_investing = 'Digital Investing',
}
enum Status {
  pending = 'pending',
  confirmed = 'confirmed',
  rejected = 'rejected',
}

@Schema({ timestamps: true })
export class Investment {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: String, enum: InvestmentType })
  type: string;

  @Prop({ type: String, enum: Status, default: Status.pending })
  status?: string;

  @Prop({ type: Types.ObjectId, ref: 'Payments', required: false })
  payment?: Payments;
}

export const InvestmentSchema = SchemaFactory.createForClass(Investment);
