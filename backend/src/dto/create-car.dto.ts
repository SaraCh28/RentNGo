import { IsString, IsNumber, IsNotEmpty, IsUrl, IsBoolean, IsOptional } from 'class-validator';

export class CreateCarDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsNumber()
  year: number;

  @IsNumber()
  pricePerDay: number;
  @IsUrl()
  imageUrl: string;

  @IsString()
  Superior: string;
  @IsBoolean()
  isAvailable?: boolean;
}
