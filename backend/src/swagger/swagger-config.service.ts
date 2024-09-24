import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfigService {
  static setup(app: INestApplication): void {
    const config = new DocumentBuilder()
      .setTitle('User Auth API')
      .setDescription('API documentation for the User Authentication application')
      .setVersion('1.0')
      .addBearerAuth() // Enables Bearer Token Authentication
      .build();
    
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api-docs', app, document);
  }
}

