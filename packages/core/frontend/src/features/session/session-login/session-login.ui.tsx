import { InputController } from "@/shared/ui/input-controller/input-controller.ui";
import { zodResolver } from "@hookform/resolvers/zod";
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
  const { control, handleSubmit } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
    defaultValues: DEFAULT_LOGIN_VALUES,
  });

  const onSubmit = handleSubmit((data: LoginFormData) => {
    navigate("/confirm-phone");
    setSearchParams({ phone: data.phone });
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
        textFieldProps={{ type: "tel", placeholder: "Номер телефона" }}
      />
    </SessionRoot>
  );
};
