import { InputController } from "@/shared/ui/input-controller/input-controller.ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SessionGroupButton } from "../session-group-buttons/session-group-buttons.ui";
import { SessionRoot } from "../session-root.ui";
import { DEFAULT_REGISTER_VALUES } from "./session-register.contants";
import { RegisterSchema } from "./session-register.contract";
import type { RegisterFormData } from "./session-register.types";

export const SessionRegister = () => {
  const { control } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
    defaultValues: DEFAULT_REGISTER_VALUES,
  });
  return (
    <SessionRoot
      buttonGroup={
        <SessionGroupButton
          linkTo="/sign-in"
          linkText="Уже есть аккаунт?"
          buttonText="Зарегистрироваться"
        />
      }
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
