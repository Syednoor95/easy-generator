import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerConfigService } from './swagger/swagger-config.service';
import { ConfigService } from '@nestjs/config';
import { CorsService } from './cors/cors.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Set up application configurations
  await setupApp(app);

  // Start the application
  const configService = app.get(ConfigService);
  const port = configService.get<number>('PORT') || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

async function setupApp(app) {
  // Set up Swagger
  SwaggerConfigService.setup(app);
  
  // Enable CORS
  const corsService = app.get(CorsService);
  app.enableCors(corsService.getCorsOptions());
}

bootstrap();
