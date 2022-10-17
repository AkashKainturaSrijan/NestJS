import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { FilterModule } from './filter/filter.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [PostsModule, FilterModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
