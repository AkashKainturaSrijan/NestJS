import { Controller, Post, UploadedFile } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApiFile } from './api-file.decorator';
import { FilesService } from './files.service';

@Controller('files')
@ApiTags('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('upload')
  @ApiFile('avatar', true) // 🤩 changing field name and set file required
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }
}
