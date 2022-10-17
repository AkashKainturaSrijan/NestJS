import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { FilterModule } from './filter/filter.module';

@Module({
  imports: [PostsModule, FilterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
