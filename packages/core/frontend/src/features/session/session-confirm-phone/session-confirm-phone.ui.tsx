import { zodResolver } from "@hookform/resolvers/zod";
import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { SessionGroupButton } from "../session-group-buttons/session-group-buttons.ui";
import { SessionRoot } from "../session-root.ui";
import { StyledPasswordField, StyledPasswordFieldsWrapper } from "../session.styled";
import { DEFAULT_CONFIRM_OTP_VALUES } from "./session-confirm-phone.constants";
import { ConfirmOtpSchema } from "./session-confirm-phone.contract";
import type { ConfirmOtpData } from "./session-confirm-phone.types";

export const SessionConfirmPhone = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ConfirmOtpData>({
    mode: "onChange",
    defaultValues: DEFAULT_CONFIRM_OTP_VALUES,
    resolver: zodResolver(ConfirmOtpSchema),
  });

  const onSubmit = handleSubmit((data) => {
    const formattedData = { ...data, phone: searchParams.get("phone") };

    setSearchParams({});
  });

  return (
    <SessionRoot buttonGroup={<SessionGroupButton buttonText="Подтвердить" />} onSubmit={onSubmit}>
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
    </SessionRoot>
  );
};
