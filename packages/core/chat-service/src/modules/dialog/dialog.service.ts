import { Injectable } from "@nestjs/common";
import { DialogMemberRole } from "@talky/constants";
import { ChatRequestContract } from "@talky/nats-module";
import { Repository } from "typeorm";
import { DialogMembers } from "./dialog-members.entity";
import { Dialog } from "./dialogs.entity";

@Injectable()
export class DialogService {
  constructor(
    private readonly dialogRepository: Repository<Dialog>,
    private readonly dialogMembersRepository: Repository<DialogMembers>,
  ) {}

  async createDialog({ isGroup, name, memberIds }: ChatRequestContract) {
    const createdDialog = await this.dialogRepository.create({
      is_group: isGroup,
      name,
    });

    await Promise.all(
      memberIds.map((userId) =>
        this.dialogMembersRepository.create({
          user_id: userId,
          dialog_id: createdDialog.id,
          role: DialogMemberRole.member,
          joined_at: Date.now(),
        }),
      ),
    );

    return createdDialog;
  }
}
