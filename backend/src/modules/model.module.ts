import { Module } from '@nestjs/common';
import { ModelController } from 'src/controllers/model.controller';
import { ModelService } from 'src/providers/model.service';
import { PythonScriptModule } from './pythonScript.module';

@Module({
  imports: [PythonScriptModule],
  controllers: [ModelController],
  providers: [ModelService],
  exports: [ModelService],
})
export class ModelModule {}
