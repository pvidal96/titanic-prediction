import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  Max,
  Min,
} from 'class-validator';
import { EmbarkationPort, Sex } from 'src/common/constants';

/**
 * Represents a subject
 */
export class PredictionSubject {
  @IsNumber({ allowNaN: false })
  @IsPositive()
  age: number;

  @IsInt()
  @Min(0)
  siblingsSpouse: number;

  @IsInt()
  @Min(0)
  parents: number;

  @IsNumber({ allowNaN: false })
  @Min(0)
  fare: number;

  @IsEnum(Sex, {
    message: 'sex must be one of the following values: male, female',
  })
  @IsNotEmpty()
  sex: string;

  @IsEnum(EmbarkationPort, {
    message: 'The embarkation port must be one of the following: C, Q, S',
  })
  @IsNotEmpty()
  embarked: string;

  @IsNumber({ allowNaN: false })
  @Min(1)
  @Max(3)
  class: string;
}
