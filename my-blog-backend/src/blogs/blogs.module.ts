import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogsModel } from './entities/blogs.model';

@Module({
  imports: [
    TypeOrmModule.forFeature([BlogsModel]),
    ],
    controllers: [BlogsController],
    providers: [
      BlogsService,
    ],
    exports: [
      BlogsService,
    ],
})
export class BlogsModule {}
