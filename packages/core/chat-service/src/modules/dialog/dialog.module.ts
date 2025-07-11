import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DialogMembers } from "./dialog-members.entity";
import { DialogService } from "./dialog.service";
import { Dialog } from "./dialogs.entity";
@Module({
  imports: [TypeOrmModule.forFeature([Dialog, DialogMembers])],
  providers: [DialogService],
})
export class DialogModule {}
