export const dialogQueryKeys = {
  dialogById: (dialogId: number): [string, number] => ["dialog", dialogId],
  dialogsByUserId: (userId: number): [string, number] => ["dialogs", userId],
};
