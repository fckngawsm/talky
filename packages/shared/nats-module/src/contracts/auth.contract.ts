export class AuthSignRequestContract {
  phone: string;
}

export class AuthSignResponseContract {
  status: string;
  message?: string;
}

export class AuthConfirmOtpRequestContract {
  userId: number;
  code: string;
}

export class AuthConfirmOtpResponseContract {
  isSuccess: boolean;
}
