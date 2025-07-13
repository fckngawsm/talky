import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DialogMemberRole } from "@talky/constants";
import { ChatRequestContract } from "@talky/nats-module";
import { In, Repository } from "typeorm";
import { DialogMembers } from "./dialog-members.entity";
import { Dialog } from "./dialogs.entity";

@Injectable()
export class DialogService {
  constructor(
    @InjectRepository(Dialog)
    private readonly dialogRepository: Repository<Dialog>,

    @InjectRepository(DialogMembers)
    private readonly dialogMembersRepository: Repository<DialogMembers>,
  ) {}

  async createDialog({ isGroup, name, memberIds }: ChatRequestContract) {
    const createdDialog = this.dialogRepository.create({
      is_group: isGroup,
      name,
    });

    await this.dialogRepository.save(createdDialog);

    await Promise.all(
      memberIds.map((userId) =>
        this.dialogMembersRepository.save(
          this.dialogMembersRepository.create({
            user_id: userId,
            dialog_id: createdDialog.id,
            role: DialogMemberRole.member,
            joined_at: new Date(), // лучше использовать Date, а не timestamp number
          }),
        ),
      ),
    );

    return createdDialog;
  }

  async getDialogs(userId: number) {
    const dialogIds = await this.dialogMembersRepository.find({
      select: ["dialog_id"],
      where: {
        user_id: userId,
      },
    });

    const ids = dialogIds.map((d) => d.dialog_id);

    const dialogs = await this.dialogRepository.find({
      where: {
        id: In(ids),
      },
    });

    return dialogs;
  }
}
