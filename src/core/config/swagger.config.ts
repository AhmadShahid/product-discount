import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

/**
 * Setup swagger in the application
 * @param app {INestApplication}
 */
export const configSwagger = (app: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('Aibees commerce')
    .setDescription('Aibees commerce API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document);
};
