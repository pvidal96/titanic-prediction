import { Module } from '@nestjs/common';
import { PredictionController } from 'src/controllers/prediction.controller';
import { PredictionService } from 'src/providers/prediction.service';
import { PythonScriptModule } from './pythonScript.module';

@Module({
  imports: [PythonScriptModule],
  controllers: [PredictionController],
  providers: [PredictionService],
  exports: [PredictionService],
})
export class PredictionModule {}
