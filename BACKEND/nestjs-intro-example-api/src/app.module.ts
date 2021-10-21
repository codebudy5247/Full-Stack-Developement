import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './posts/post.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       url: `postgres://postgres:qwertyuiop@localhost:5432/nest-api`,
//       synchronize: true,
//       logging: 'all',
//       //entities of the database need to register, it takes an array of
//       // entity types.
//       entities: [Posts],
//     }),
//     PostModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PostModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
