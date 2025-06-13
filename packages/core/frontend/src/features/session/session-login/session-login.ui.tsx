import { InputController } from "@/shared/ui/input-controller/input-controller.ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SessionGroupButton } from "../session-group-buttons/session-group-buttons.ui";
import { SessionRoot } from "../session-root.ui";
import { DEFAULT_LOGIN_VALUES } from "./session-login.constants";
import { LoginSchema } from "./session-login.contract";
import type { LoginFormData } from "./session-login.types";

export const SessionLogin = () => {
  const { control } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
    defaultValues: DEFAULT_LOGIN_VALUES,
  });

  return (
    <SessionRoot
      buttonGroup={<SessionGroupButton linkText="Зарегистрироваться" buttonText="Войти" />}
      formTitle="Вход"
      onSubmit={() => {}}
    >
      <InputController
        control={control}
        name="phone"
        rest={{ type: "tel", placeholder: "Номер телефона" }}
      />
    </SessionRoot>
  );
};
