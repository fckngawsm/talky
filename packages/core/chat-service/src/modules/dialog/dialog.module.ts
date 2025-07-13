import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DialogController } from "./dialog.controller";
import { DialogService } from "./dialog.service";
import { DialogMembers } from "./entities/dialog-members.entity";
import { Dialog } from "./entities/dialogs.entity";
@Module({
  imports: [TypeOrmModule.forFeature([Dialog, DialogMembers])],
  controllers: [DialogController],
  providers: [DialogService],
})
export class DialogModule {}
