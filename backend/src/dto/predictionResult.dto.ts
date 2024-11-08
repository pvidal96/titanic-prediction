import { IsBoolean } from 'class-validator';

/**
 * Represents a prediction result
 */
export class PredictionResult {
  @IsBoolean()
  survives: boolean;
}
