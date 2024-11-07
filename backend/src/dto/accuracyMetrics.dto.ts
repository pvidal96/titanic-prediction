import { Min } from 'class-validator';

/**
 * Represents the Accuracy Metric Dto
 */
export class AccuracyMetrics {
  @Min(0)
  accuracy: number;
}
