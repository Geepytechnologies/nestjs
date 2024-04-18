import { Module } from '@nestjs/common';
import { InvestmentsService } from './investments.service';
import { InvestmentsController } from './investments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Investment, InvestmentSchema } from 'schema/investments.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Investment.name, schema: InvestmentSchema },
    ]),
  ],
  providers: [InvestmentsService],
  controllers: [InvestmentsController],
})
export class InvestmentsModule {}
