import { Injectable } from "@nestjs/common";
import { DialogMemberRole } from "@talky/constants";
import { Repository } from "typeorm";
import { DialogMembers } from "./dialog-members.entity";
import { CreateDialog } from "./dialog.types";
import { Dialog } from "./dialogs.entity";

@Injectable()
export class DialogService {
  constructor(
    private readonly dialogRepository: Repository<Dialog>,
    private readonly dialogMembersRepository: Repository<DialogMembers>,
  ) {}

  async createDialog({ isGroup, name, memberIds }: CreateDialog) {
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
