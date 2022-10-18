import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { FilterModule } from './filter/filter.module';
import { FilesModule } from './files/files.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PostsModule,
    FilterModule,
    FilesModule,
    MongooseModule.forRoot('mongodb://localhost/authentication'),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
