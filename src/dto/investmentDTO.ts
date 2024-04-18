import { ApiProperty } from '@nestjs/swagger';
import { Payments } from 'schema/payments.schema';
import { User } from 'schema/user.schema';

export class CreateInvestmentDto {
  @ApiProperty({ description: 'UserID' })
  user: string;
  @ApiProperty({ description: 'investmentType' })
  type: string;
  @ApiProperty({ description: 'status' })
  status?: string;
  @ApiProperty({ description: 'paymentID' })
  payment?: string;
}
