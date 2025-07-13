import { DialogsRequestContract } from "@talky/nats-module";

export interface GetDialogsWithUserInfo extends DialogsRequestContract {
  phone: number;
}
