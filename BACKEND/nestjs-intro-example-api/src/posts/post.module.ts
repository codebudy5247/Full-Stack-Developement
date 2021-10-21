import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Posts } from './post.entity';

@Module({
  //'TypeOrmModule.forFeature([Post])' makes the 'Post' entity
  // schema available to 'Repository' from the 'typeorm'(NodeJS library)
  // to query the database.
  imports: [TypeOrmModule.forFeature([Posts])],
  //'PostController' registered to controllers array to expose the routes.
  controllers: [PostsController],
  //'PostsService' registered to providers array to load the service
  // for the Post module.
  providers: [PostsService],
})
export class PostModule {}
