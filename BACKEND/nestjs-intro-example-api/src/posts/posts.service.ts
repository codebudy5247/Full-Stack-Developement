import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Posts } from './post.entity';
import { PostRepository } from './post.repository';

//'Injectable' decorator used on 'PostService' to make it as an injectable service
@Injectable()
export class PostsService {
  // 'Repository<Post>' injected into the service class with the help of
  //  '@InjectRepository()' decorator.

  // constructor(@InjectRepository(Posts) private postRepo: Repository<Posts>) {}

  constructor(@InjectRepository(Posts) private postRepo: PostRepository) {}

  findAll(): Promise<Posts[]> {
    return this.postRepo.find();
  }
  //'insert()' method provided by the 'Repository' imported from
  //'typeorm'(NodeJS library). This method inserts a given entity. Executes
  //fast and efficient Insert queries. Doesn't check if the entity exists
  //in the database, so the query will fail if a duplicate entity tries
  //to insert.
  create(newPost) {
    this.postRepo.insert(newPost);
  }
  update(postToUpdate) {
    this.postRepo.update(postToUpdate.id, postToUpdate);
  }
  delete(id) {
    this.postRepo.delete(id);
  }
}
