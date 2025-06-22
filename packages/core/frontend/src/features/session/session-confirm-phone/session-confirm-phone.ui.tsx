import { useTimer } from "@/shared/hooks/useTimer";
import { zodResolver } from "@hookform/resolvers/zod";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { SessionGroupButton } from "../session-group-buttons/session-group-buttons.ui";
import { SessionRoot } from "../session-root.ui";
import {
  StyledPasswordField,
  StyledPasswordFieldsWrapper,
  StyledSessionDescription,
} from "../session.styled";
import { SessionConfirmPhoneHeader } from "./session-confirm-phone-header/session-confirm-phone-header";
import { DEFAULT_CONFIRM_OTP_VALUES } from "./session-confirm-phone.constants";
import { ConfirmOtpSchema } from "./session-confirm-phone.contract";
import type { ConfirmOtpData } from "./session-confirm-phone.types";

import { Button } from "@radix-ui/themes";

export const SessionConfirmPhone = () => {
  const [searchParams] = useSearchParams();
  const { secondsLeft, startTimer } = useTimer();

  const { handleSubmit, control } = useForm<ConfirmOtpData>({
    mode: "onChange",
    defaultValues: DEFAULT_CONFIRM_OTP_VALUES,
    resolver: zodResolver(ConfirmOtpSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const formattedData = { ...data, phone: searchParams.get("phone") };
    console.log("Подтверждение кода", formattedData);
  });

  const handleResendCode = () => {
    const phone = searchParams.get("phone");
    if (phone) {
      console.log("Повторная отправка кода для", phone);
      startTimer();
    }
  };

  return (
    <SessionRoot
      title={<SessionConfirmPhoneHeader />}
      buttonGroup={<SessionGroupButton buttonText="Подтвердить" />}
      onSubmit={onSubmit}
    >
      <StyledSessionDescription>
        Мы отправили смс с кодом на номер {searchParams.get("phone")}
      </StyledSessionDescription>

      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <StyledPasswordFieldsWrapper onValueChange={field.onChange} value={field.value}>
            <StyledPasswordField />
            <StyledPasswordField />
            <StyledPasswordField />
            <StyledPasswordField />
            <OneTimePasswordField.HiddenInput />
          </StyledPasswordFieldsWrapper>
        )}
      />

      <StyledSessionDescription>
        {secondsLeft !== null ? (
          `Запросить код можно через: ${secondsLeft}`
        ) : (
          <Button onClick={handleResendCode} variant="soft" size="2">
            Отправить код повторно
          </Button>
        )}
      </StyledSessionDescription>
    </SessionRoot>
  );
};
