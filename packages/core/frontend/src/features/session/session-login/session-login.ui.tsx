import { useTimer } from "@/shared/hooks/useTimer";
import { InputController } from "@/shared/ui/input-controller/input-controller.ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SessionGroupButton } from "../session-group-buttons/session-group-buttons.ui";
import { SessionRoot } from "../session-root.ui";
import { DEFAULT_LOGIN_VALUES } from "./session-login.constants";
import { LoginSchema } from "./session-login.contract";
import type { LoginFormData } from "./session-login.types";

export const SessionLogin = () => {
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { startTimer } = useTimer();
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
    defaultValues: DEFAULT_LOGIN_VALUES,
  });

  const onSubmit = handleSubmit((data: LoginFormData) => {
    navigate("/confirm-phone");
    setSearchParams({ phone: data.phone });
    startTimer();
  });

  return (
    <SessionRoot
      title="Вход"
      buttonGroup={
        <SessionGroupButton linkTo="/sign-up" linkText="Зарегистрироваться" buttonText="Войти" />
      }
      onSubmit={onSubmit}
    >
      <InputController
        control={control}
        name="phone"
        renderInput={({ value, onChange, onBlur, ref }) => (
          <InputMask
            mask="+7 (___) ___-__-__"
            replacement={{ _: /\d/ }}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
          />
        )}
      />
    </SessionRoot>
  );
};
