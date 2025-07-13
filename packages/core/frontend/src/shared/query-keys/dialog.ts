export const dialogQueryKeys = {
  dialogById: (dialogId: number) => ["dialog", dialogId],
  dialogsByUserId: (userId: number) => ["dialogs", userId],
};
