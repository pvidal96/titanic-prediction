import { Module } from '@nestjs/common';
import { PythonScriptService } from 'src/providers/pythonScript.service';

@Module({
  providers: [PythonScriptService],
  exports: [PythonScriptService],
})
export class PythonScriptModule {}
