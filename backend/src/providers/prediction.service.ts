import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PredictionResult } from 'src/dto/predictionResult.dto';
import { PythonScriptService } from './pythonScript.service';
import { PredictionSubject } from 'src/dto/predictionSubject.dto';

@Injectable()
export class PredictionService {
  constructor(private pythonScriptService: PythonScriptService) {}

  /**
   * Calls the python executable to obtain a prediction
   * @param PredictionSubject the subject of the prediction
   * @returns if the subject should survive or not
   */
  async predictSingle(
    predictionSubject: PredictionSubject,
  ): Promise<PredictionResult> {
    return this.pythonScriptService.executeModel('predict', [
      JSON.stringify(predictionSubject),
    ]);
  }
}
