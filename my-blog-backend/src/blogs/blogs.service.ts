import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogsModel } from './entities/blogs.model';
import { Repository } from 'typeorm';

@Injectable()
export class BlogsService {

  constructor(
    @InjectRepository(BlogsModel)
    private blogsRepository: Repository<BlogsModel>,
  ) {}


  create(createBlogDto: CreateBlogDto) {
    return 'This action adds a new blog';
  }

  async findAll(): Promise<BlogsModel[]> {
    return await this.blogsRepository.find();
  }

  async findOne(id: number): Promise<BlogsModel> {
    return this.blogsRepository.findOneBy({ id });    ;
  }
}
