import { useTimer } from "@/shared/hooks/useTimer";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@radix-ui/themes";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";
import { Controller, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

import { SessionGroupButton } from "../session-group-buttons/session-group-buttons.ui";
import { SessionRoot } from "../session-root.ui";
import {
  StyledPasswordField,
  StyledPasswordFieldsWrapper,
  StyledSessionDescription,
} from "../session.styled";
import { SessionConfirmPhoneHeader } from "./session-confirm-phone-header/session-confirm-phone-header";
import { confirmOtp } from "./session-confirm-phone.api";
import { DEFAULT_CONFIRM_OTP_VALUES } from "./session-confirm-phone.constants";
import { ConfirmOtpSchema } from "./session-confirm-phone.contract";
import type { ConfirmOtpData } from "./session-confirm-phone.types";

const CODE_LENGTH = 4;

export const SessionConfirmPhone = () => {
  const [searchParams] = useSearchParams();
  const { secondsLeft, startTimer } = useTimer();
  const phone = searchParams.get("phone");
  const navigate = useNavigate();
  const { handleSubmit, control, setError } = useForm<ConfirmOtpData>({
    mode: "onChange",
    defaultValues: DEFAULT_CONFIRM_OTP_VALUES,
    resolver: zodResolver(ConfirmOtpSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    if (!phone) return;
    try {
      await confirmOtp({ code: data.code, phone });
      navigate("/chat");
    } catch (err) {
      setError("code", { message: "Ошибка при отправки формы" });
    }
  });

  const handleResendCode = () => {
    if (phone) {
      startTimer();
    }
  };

  return (
    <SessionRoot
      title={<SessionConfirmPhoneHeader />}
      buttonGroup={<SessionGroupButton buttonText="Подтвердить" />}
      onSubmit={onSubmit}
    >
      <StyledSessionDescription>Мы отправили смс с кодом на номер {phone}</StyledSessionDescription>

      <Controller
        control={control}
        name="code"
        render={({ field: { value, onChange } }) => (
          <OneTimePasswordField.Root value={value} onValueChange={onChange} autoSubmit={false}>
            <StyledPasswordFieldsWrapper>
              {Array.from({ length: CODE_LENGTH }).map((_, i) => (
                <StyledPasswordField as={OneTimePasswordField.Input} key={i} />
              ))}
              <OneTimePasswordField.HiddenInput name="code" />
            </StyledPasswordFieldsWrapper>
          </OneTimePasswordField.Root>
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
