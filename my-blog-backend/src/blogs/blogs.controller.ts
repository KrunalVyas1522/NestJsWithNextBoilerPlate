import { Controller, Get, Post, Body, HttpCode, HttpStatus, Query, Param } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateBlogDto } from './dto/create-blog.dto';
import { BlogsModel } from './entities/blogs.model';
import { BlogsService } from './blogs.service';

@ApiTags('Blogs')
@Controller('blogs')
export class BlogsController {
  constructor(private readonly blogsService: BlogsService) {}

  @ApiResponse({
    description: 'For create a new Phase.',
  })
  @HttpCode(HttpStatus.OK)
  @Post('/')
  async createPhase(@Body() body: CreateBlogDto): Promise<BlogsModel| any | Error> {
    return await this.blogsService.create(body);
  }

  @Get()
  async findAllBlogs(
    // query: QueryPhaseDto,
    // @Query() query: string,
  ): Promise<BlogsModel[] | Error> {
    return await this.blogsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BlogsModel> {
    return await this.blogsService.findOne(+id);
  }
}
