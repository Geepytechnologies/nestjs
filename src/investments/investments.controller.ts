import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateInvestmentDto } from 'src/dto/investmentDTO';
import { InvestmentsService } from './investments.service';

@ApiTags('Investments')
@Controller('investments')
export class InvestmentsController {
  constructor(private readonly investmentService: InvestmentsService) {}
  @Post('/')
  @ApiBody({ type: CreateInvestmentDto })
  async create(@Body() inputDTO: CreateInvestmentDto): Promise<any> {
    const newInvestment = await this.investmentService.create(inputDTO);
    return newInvestment;
  }
  @Get('/:id')
  async getInvestmentById(@Param('id') id: string) {
    return this.investmentService.findOne(id);
  }
  @Get('/user/:id')
  async getInvestmentByUser(@Param('id') id: string) {
    return this.investmentService.findAllByUserId(id);
  }
}
