import {
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsEmail,
  IsString,
  MaxLength,
  IsNumber,
  IsInt,
  IsArray,
} from 'class-validator'
export class CreateProjectDto {
  workflow: number
  @IsNotEmpty()
  @MaxLength(255)
  full_name: string

  @IsNotEmpty()
  @IsPhoneNumber('VN')
  number_phone: string

  @IsOptional()
  @IsEmail()
  @MaxLength(255)
  email?: string

  @IsOptional()
  @IsString()
  address?: string

  @IsOptional()
  @IsString()
  infor_product?: string

  @MaxLength(225)
  description: string
  steps: string
  dongCo?: string
  tuDien?: string
  capTai?: string
  congSuat?: string
  hoThang?: string
  cabin?: string
  cua?: string
  pit?: string
  oh?: string
  baoHanh?: string
  baoTri?: string
}
