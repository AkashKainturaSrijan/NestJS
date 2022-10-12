import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { FilterModule } from './filter/filter.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PostsModule,
    FilterModule,
    MongooseModule.forRoot('mongodb://localhost/authentication'),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
