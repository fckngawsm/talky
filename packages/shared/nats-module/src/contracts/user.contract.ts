export class UserGetByPhoneRequestContract {
  phone: string;
}

export class UserGetByPhoneResponseContract {
  user: any;
}

export class UserGetOtpCodeRequestContract {
  userId: number;
}

export class UserCreateResponseContract {
  user: any;
}

export class UserCreateRequestContract {
  phone: string;
}

export class UserConfirmOtpCodeRequestContract {
  userId: number;
  code: string;
}
