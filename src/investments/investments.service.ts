import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Investment } from 'schema/investments.schema';
import { CreateInvestmentDto } from 'src/dto/investmentDTO';

@Injectable()
export class InvestmentsService {
  constructor(
    @InjectModel(Investment.name)
    public readonly investmentModel: Model<Investment>,
  ) {}

  async create(createInvestmentDto: CreateInvestmentDto): Promise<Investment> {
    const investment = new this.investmentModel(createInvestmentDto);
    return investment.save();
  }
  async findAll(): Promise<Investment[]> {
    return this.investmentModel.find().exec();
  }
  async findAllByUserId(userId: string): Promise<Investment[]> {
    return this.investmentModel.find({ user: userId }).exec();
  }

  async findOne(id: string): Promise<Investment> {
    return this.investmentModel.findById(id).exec();
  }

  async update(
    id: string,
    updateInvestmentDto: Partial<Investment>,
  ): Promise<Investment> {
    return this.investmentModel
      .findByIdAndUpdate(id, updateInvestmentDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Investment> {
    return this.investmentModel.findByIdAndDelete(id).exec();
  }
}
