import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateCarInputDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  year: string;

  @IsNumberString()
  @IsNotEmpty()
  price: string;
}
