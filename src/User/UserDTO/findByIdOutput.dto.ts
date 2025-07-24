import { ApiProperty } from '@nestjs/swagger';

export class findByIdOutpurDTO {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
