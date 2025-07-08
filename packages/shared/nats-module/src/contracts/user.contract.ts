// foundedUser
export class UserGetByPhoneRequestContract {
  phone: string;
}
export class UserGetByPhoneResponseContract {
  user: any;
}
// getOtpCod
export class UserGetOtpCodeRequestContract {
  userId: number;
}
export class UserCreateResponseContract {
  user: any;
}
//create
export class UserCreateRequestContract {
  phone: string;
}
export class UserConfirmOtpCodeRequestContract {
  userId: number;
  code: string;
}
// find
export class UserFindByDataRequestContract {
  searchValue: string;
}

export class UserFindByDataResponseContract {
  user: any;
}
