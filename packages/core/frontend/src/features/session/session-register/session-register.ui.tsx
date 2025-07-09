import { StyledRootTextFieldController } from "@/shared/ui/input-controller/input-controller.styled";
import { InputController } from "@/shared/ui/input-controller/input-controller.ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputMask } from "@react-input/mask";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { SessionGroupButton } from "../session-group-buttons/session-group-buttons.ui";
import { SessionRoot } from "../session-root.ui";
import { registerUser } from "./session-register.api";
import { DEFAULT_REGISTER_VALUES } from "./session-register.contants";
import { RegisterSchema } from "./session-register.contract";
import type { RegisterFormData } from "./session-register.types";

export const SessionRegister = () => {
  const [_, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm<RegisterFormData>({
    resolver: zodResolver(RegisterSchema),
    mode: "onChange",
    defaultValues: DEFAULT_REGISTER_VALUES,
  });

  const onSubmit = handleSubmit(async (data: RegisterFormData) => {
    try {
      await registerUser(data);
      navigate("/confirm-phone");
      setSearchParams({ phone: data.phone });
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <SessionRoot
      title="Регистрация"
      buttonGroup={
        <SessionGroupButton
          linkTo="/sign-in"
          linkText="Уже есть аккаунт?"
          buttonText="Зарегистрироваться"
        />
      }
      onSubmit={onSubmit}
    >
      <InputController
        control={control}
        name="phone"
        renderInput={({ value, onChange, onBlur, ref }) => (
          <InputMask
            placeholder="+7"
            mask="+7 (___) ___-__-__"
            replacement={{ _: /\d/ }}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            ref={ref}
            component={StyledRootTextFieldController}
          />
        )}
      />
    </SessionRoot>
  );
};
