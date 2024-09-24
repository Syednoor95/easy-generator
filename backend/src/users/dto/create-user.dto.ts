import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user123', description: 'The name for the account' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'test@gmail.com', description: 'The email for the account' })
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  @ApiProperty({ example: '12345678', description: 'The password for the account' })
  password: string;
}
