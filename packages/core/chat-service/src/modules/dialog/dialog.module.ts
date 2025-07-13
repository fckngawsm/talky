import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DialogMembers } from "./dialog-members.entity";
import { DialogController } from "./dialog.controller";
import { DialogService } from "./dialog.service";
import { Dialog } from "./dialogs.entity";
@Module({
  imports: [TypeOrmModule.forFeature([Dialog, DialogMembers])],
  controllers: [DialogController],
  providers: [DialogService],
})
export class DialogModule {}
