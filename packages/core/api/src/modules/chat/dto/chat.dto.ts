import { User } from "@talky/types";
import { ArrayNotEmpty, IsArray, IsBoolean, IsString, ValidateNested } from "class-validator";

export class ChatDto {
  @IsBoolean()
  isGroup: boolean;
  @IsString()
  name: string;
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  memberIds: Array<User["id"]>;
}
