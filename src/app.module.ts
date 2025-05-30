import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TrackService } from './track/track.service';
import { TrackController } from './track/track.controller';

@Module({
  imports: [ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'client') })],
  controllers: [AppController, TrackController],
  providers: [AppService, TrackService],
})
export class AppModule {}
