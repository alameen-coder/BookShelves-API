import { IsString, IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @Type(() => Number)
  @IsInt()
  year: number;

  @IsOptional()
  @IsString()
  description?: string;
}
