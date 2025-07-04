import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class CreateProductInputDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  price: string;
}
