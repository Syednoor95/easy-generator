import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class AuthCredentialsDto {
  @ApiProperty({ example: 'user123', description: 'The email for the account' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password@123', description: 'The password for the account' })
  @IsNotEmpty()
  password: string;
}
