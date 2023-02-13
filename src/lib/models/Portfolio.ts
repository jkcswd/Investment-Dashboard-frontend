import { Schema, model, Types} from 'mongoose';

interface PortfolioInterface {
  userId: Types.ObjectId;
  startingValue: number;
  currentValue: number;
}

const PortfolioSchema = new Schema<PortfolioInterface>({
  userId: { type: Schema.Types.ObjectId, index: true  },
  startingValue: { type: Number, required: true},
  currentValue: { type: Number, required: true}
});

const Portfolio = model<PortfolioInterface>('Portfolio', PortfolioSchema);

export default Portfolio;