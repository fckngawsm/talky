import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DialogMemberRole } from "@talky/constants";
import { ChatRequestContract } from "@talky/nats-module";
import { DialogWithMessages } from "@talky/types";
import { Repository } from "typeorm";
import { Messages } from "../messages/messages.entity";
import { mappingDialogs } from "./dialog.utils";
import { DialogMembers } from "./entities/dialog-members.entity";
import { Dialog } from "./entities/dialogs.entity";
import { ResultDialogs } from "./types/dialogs";

@Injectable()
export class DialogService {
  constructor(
    @InjectRepository(Dialog)
    private readonly dialogRepository: Repository<Dialog>,

    @InjectRepository(DialogMembers)
    private readonly dialogMembersRepository: Repository<DialogMembers>,
  ) {}

  async createDialog({ isGroup, name, memberIds, avatarUrl }: ChatRequestContract) {
    const createdDialog = this.dialogRepository.create({
      avatarUrl: avatarUrl,
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
    const dialogIds = await this.dialogMembersRepository
      .createQueryBuilder("dm")
      .select("DISTINCT dm.dialog_id", "dialog_id")
      .where("dm.user_id = :userId", { userId })
      .getRawMany();

    const ids = dialogIds.map((d) => d.dialog_id);

    const dialogs: ResultDialogs[] = await this.dialogRepository
      .createQueryBuilder("dialog")
      .whereInIds(ids)
      .innerJoin("dialog_members", "dm", "dm.dialog_id = dialog.id AND dm.user_id = :userId", {
        userId,
      })
      .addSelect((subQuery) => {
        return subQuery
          .select("m.content")
          .from(Messages, "m")
          .where("m.dialog_id = dialog.id")
          .andWhere("m.deleted_at IS NULL")
          .orderBy("m.createdAt", "DESC")
          .limit(1);
      }, "lastMessageContent")
      .getRawMany();

    return mappingDialogs(dialogs);
  }

  async getDialogById(dialogId: number): Promise<DialogWithMessages> {
    const foundedDialog = await this.dialogRepository
      .createQueryBuilder("d")
      .leftJoinAndSelect("d.messages", "messages", "messages.deleted_at IS NULL")
      .where("d.id = :dialogId", { dialogId })
      .orderBy("messages.createdAt", "ASC")
      .getOne();

    return foundedDialog as unknown as DialogWithMessages;
  }
}
