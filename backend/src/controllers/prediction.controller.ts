import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PredictionService } from '../providers/prediction.service';
import { PredictionSubject } from 'src/dto/predictionSubject.dto';
import { PredictionResult } from 'src/dto/predictionResult.dto';

@Controller('prediction')
export class PredictionController {
  constructor(private predictionService: PredictionService) {}

  /**
   * Get's if a single subject can survive or not
   * @param predictionSubject the subject for the prediction
   * @returns the prediction result (if the subject should survive)
   */
  @HttpCode(HttpStatus.OK)
  @Post('single')
  predictOne(
    @Body() predictionSubject: PredictionSubject,
  ): Promise<PredictionResult> {
    return this.predictionService.predictSingle(predictionSubject);
  }

  // @HttpCode(HttpStatus.OK)
  // @Post('batch')
  // predictBatch(@Req() predictionSubjects: Array<PredictionSubject>) {
  //   //TODO expand API
  // }
}
