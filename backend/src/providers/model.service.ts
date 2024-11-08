import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccuracyMetrics } from 'src/dto/accuracyMetrics.dto';
import { PythonScriptService } from './pythonScript.service';

@Injectable()
export class ModelService {
  constructor(private pythonScriptService: PythonScriptService) {}

  /**
   * Calls the python executable to obtain ML model's accuracy
   * @returns Model accuracy
   */
  async getAccuracy(): Promise<AccuracyMetrics> {
    return this.pythonScriptService.executeModel('accuracy');
  }
}
