import { unstable_OneTimePasswordField as OneTimePasswordField } from "radix-ui";
import { Controller, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { SessionGroupButton } from "../session-group-buttons/session-group-buttons.ui";
import { SessionRoot } from "../session-root.ui";
import { StyledPasswordField } from "../session.styled";
import { DEFAULT_CONFIRM_OTP_VALUES } from "./session-confirm-phone.constants";
import type { ConfirmOtpData } from "./session-confirm-phone.types";

export const SessionConfirmPhone = () => {
  const [searchParams] = useSearchParams();
  const { handleSubmit, control } = useForm<ConfirmOtpData>({
    mode: "onChange",
    defaultValues: DEFAULT_CONFIRM_OTP_VALUES,
  });

  const onSubmit = handleSubmit((data) => {
    const formattedData = { ...data, code: searchParams.get("phone") };
    console.log(formattedData, "formattedData");
  });

  return (
    <SessionRoot buttonGroup={<SessionGroupButton buttonText="Подтвердить" />} onSubmit={onSubmit}>
      <Controller
        name="code"
        control={control}
        render={({ field }) => (
          <OneTimePasswordField.Root
            className="OTPRoot"
            onValueChange={field.onChange}
            value={field.value}
          >
            <StyledPasswordField />
            <StyledPasswordField />
            <StyledPasswordField />
            <StyledPasswordField />
            <OneTimePasswordField.HiddenInput />
          </OneTimePasswordField.Root>
        )}
      />
    </SessionRoot>
  );
};
