import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DialogMembers } from "./dialog-members.entity";
import { DialogController } from "./dialog.controller";
import { DialogService } from "./dialog.service";
import { Dialog } from "./dialogs.entity";
@Module({
  controllers: [DialogController],
  imports: [TypeOrmModule.forFeature([Dialog, DialogMembers])],
  providers: [DialogService],
})
export class DialogModule {}
