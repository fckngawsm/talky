import { User } from "@talky/types";

export interface AuthenticatedRequest extends Request {
  user: User;
}
