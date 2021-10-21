import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  HttpCode,
  HttpException,
  HttpStatus
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { Posts } from './post.entity';

// '@Controller()' decorator that makes class as Nest controller that can
// receive the inbound request and produce the response.
@Controller('posts')
export class PostsController {
  // injected 'PostsService'
  constructor(private readonly postService: PostsService) {}

  //'@Get()' decorator is a route handler decorator. Routes Http Get
  // request to the specified path.
  // Http method that executes read operation to fetch all the post data.
  @Get('all')
  async getAll(): Promise<Posts[]> {
    return await this.postService.findAll();
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
  }
  // '@Post()' request handler decorator. Routes Http Post request to the
  //  specified path.
  // '@HttpSatatusCode' request method decorator. Defines the Http response
  //  status code. Overrides default status code for the decorated request
  //  method. '201' status code stands for created successfully.
  // '@Body()' route handler parameter decorator. Extract the entire body
  //  object from the request object and populate the decorated parameter
  //  with the value of the body.
  //  Create a new Post
  @Post('add')
  @HttpCode(201)
  createPost(@Body() newPostss: any) {
    this.postService.create(newPostss);
  }
  //Update a Post
  @Post('update')
  @HttpCode(200)
  updatePost(@Body() posToUpdate: any) {
    this.postService.update(posToUpdate);
  }
  //Delete a Post
  @Delete('delete/:id')
  @HttpCode(200)
  deletePost(@Param('id') id) {
    this.postService.delete(id);
  }
}
