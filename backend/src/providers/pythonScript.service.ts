const { spawnSync } = require('child_process');
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class PythonScriptService {
  /**
   * Executes the python script ML model
   * @param fun the function to execute (train, predict, accuracy)
   * @param args function args
   * @returns Object the result as a JSON object
   */
  async executeModel(fun: string, args: Array<string> = []): Promise<any> {
    const pythonProcess = await spawnSync(
      'python3',
      [process.env.SCRIPT_PATH, fun, process.env.MODEL_PATH].concat(args),
    );

    const result = pythonProcess.stdout?.toString()?.trim();
    const error = pythonProcess.stderr?.toString()?.trim();

    if (!error) {
      const resultParsed = JSON.parse(result);
      return resultParsed;
    } else {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}
