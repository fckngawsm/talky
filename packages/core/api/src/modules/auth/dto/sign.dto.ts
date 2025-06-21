import { IsNumber, IsString } from "class-validator";
import { IsRussianPhone } from "src/common/decorators/is-russian-phone.decorator";

export class SignDTO {
  @IsString()
  @IsRussianPhone()
  phone: string;
}

export class ConfirmOtpDTO {
  @IsNumber()
  userId: number;

  @IsString()
  code: string;
}
