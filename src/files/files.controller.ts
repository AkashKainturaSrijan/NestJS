import { Controller, Post, UploadedFile } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiFile } from './api-file.decorator';
import { FilesService } from './files.service';
import { ParseFile } from './parse-file.pipe';

@Controller('files')
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @ApiFile()
  uploadFile(@UploadedFile(ParseFile) file: Express.Multer.File) {
    console.log(file);
  }
}
