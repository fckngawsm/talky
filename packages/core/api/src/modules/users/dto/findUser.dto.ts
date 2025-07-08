import { IsOptional, IsString } from "class-validator";
import { IsRussianPhone } from "src/common/decorators/is-russian-phone.decorator";

export class FindUserDto {
  @IsString()
  @IsOptional()
  login?: string;
  @IsRussianPhone()
  @IsOptional()
  phone?: string;
}
