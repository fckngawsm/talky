import { IsString } from "class-validator";
import { IsRussianPhone } from "src/common/decorators/is-russian-phone.decorator";

export class SignDTO {
  @IsString()
  @IsRussianPhone()
  phone: string;
}

export class ConfirmOtpDTO {
  @IsString()
  @IsRussianPhone()
  phone: string;

  @IsString()
  code: string;
}
