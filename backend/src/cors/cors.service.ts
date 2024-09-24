import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CorsService {
  constructor(private configService: ConfigService) {}

  getCorsOptions() {
    return {
      origin: this.configService.get<string>('CORS_ORIGIN') || '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    };
  }
}
