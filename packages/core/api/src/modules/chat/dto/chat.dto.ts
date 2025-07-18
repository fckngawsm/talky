import { User } from "@talky/types";
import {
  ArrayNotEmpty,
  IsArray,
  IsBoolean,
  IsNumber,
  IsString,
  ValidateNested,
} from "class-validator";

export class ChatDto {
  @IsBoolean()
  isGroup: boolean;

  @IsString()
  avatarUrl: string;

  @IsString()
  name: string;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  memberIds: Array<User["id"]>;
}

export class GetChatByIdDto {
  @IsNumber()
  id: number;
}
