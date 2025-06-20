export class UserGetByPhoneRequestContract {
  phone: string;
}

export class UserGetByPhoneResponseContract {
  user: any;
}

export class UserGetOtpCodeRequestContract {
  userId: number;
}

export class UserGetOtpCodeResponseContract {
  code: string;
}
