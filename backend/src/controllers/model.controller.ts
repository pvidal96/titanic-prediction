import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AccuracyMetrics } from 'src/dto/accuracyMetrics.dto';
import { ModelService } from 'src/providers/model.service';

@Controller('model')
export class ModelController {
  constructor(private modelService: ModelService) {}

  /**
   * Obtains the current model's accuracy
   * @returns Promise<AccuracyMetrics>
   */
  @HttpCode(HttpStatus.OK)
  @Get('accuracy')
  getAccuracy(): Promise<AccuracyMetrics> {
    return this.modelService.getAccuracy();
  }

  // @HttpCode(HttpStatus.OK)
  // @Post('train')
  // trainModel() {
  //   //TODO expand API
  // }
}
