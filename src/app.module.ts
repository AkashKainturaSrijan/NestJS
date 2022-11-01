import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { FilterModule } from './filter/filter.module';
import { FilesModule } from './files/files.module';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { UserModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PostsModule,
    FilterModule,
    FilesModule,
    MongooseModule.forRoot(
      'mongodb+srv://AkashKaintura:LPA3gHXaNXwFEugk@cluster0.v4umw92.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
