import { Module } from '@nestjs/common';
import { PredictionModule } from './prediction.module';
import { ConfigModule } from '@nestjs/config';
import { ModelModule } from './model.module';

@Module({
  imports: [ConfigModule.forRoot(), PredictionModule, ModelModule],
})
export class AppModule {}
