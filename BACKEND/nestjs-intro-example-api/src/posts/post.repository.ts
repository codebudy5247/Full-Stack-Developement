import { Repository } from "typeorm";
import { EntityRepository } from "typeorm/decorator/EntityRepository";

import { Posts } from './post.entity'

@EntityRepository(Posts)
export class PostRepository extends Repository<Posts> {}
