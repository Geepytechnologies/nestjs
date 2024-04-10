import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BankingDocument = HydratedDocument<Banking>;

@Schema()
export class Banking {
  @Prop()
  firstname: string;

  @Prop()
  lastname: string;

  @Prop()
  accountNO: string;

  @Prop()
  bank: string;

  @Prop()
  country: string;
}

export const BankingSchema = SchemaFactory.createForClass(Banking);
