import { Module } from '@nestjs/common';
import { BlogsModule } from './blogs/blogs.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [BlogsModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
