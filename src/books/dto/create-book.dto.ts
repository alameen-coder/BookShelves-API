import { IsString, IsInt, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsInt()
  year: number;

  @IsOptional()
  @IsString()
  description?: string;
}
