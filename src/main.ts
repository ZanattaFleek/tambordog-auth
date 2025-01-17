import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './entity/dataSource';

const corsAutorizados = [
  "http://localhost:3000",
  "https://".concat(process.env.REACT_APP_BACKEND_ENDERECO),
];

async function bootstrap() {
  const app = await NestFactory.create(AppModule); 
  app.enableCors({ origin: corsAutorizados });
  await AppDataSource.initialize()
  await app.listen(process.env.REACT_APP_BACKEND_PORTA ?? 3000);
}
bootstrap();
