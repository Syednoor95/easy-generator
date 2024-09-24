import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CorsService } from './cors/cors.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/auth-app'),
    AuthModule,
    UsersModule,
  ],
  providers: [CorsService],
  exports: [CorsService]
})
export class AppModule {}
