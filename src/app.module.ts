import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GlobalContextModule } from './contexto/GlobalContext.module';

@Module({
  imports: [GlobalContextModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule {}
