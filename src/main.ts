import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/exceptions/http-exception.filter';
import { ValidateInputPipe } from './core/pipes/validate.pipe';
import * as compression from 'compression';
import { configSwagger } from './core/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT');
  app.use(compression());
  app.enableCors();
  app.useGlobalFilters(new HttpExceptionFilter());
  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(new ValidateInputPipe());
  configSwagger(app);
  await app.listen(PORT || 8000);
}
bootstrap();
