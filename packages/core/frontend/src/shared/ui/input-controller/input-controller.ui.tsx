import { Flex, Text, TextField } from "@radix-ui/themes";
import { Controller, type Control } from "react-hook-form";
import { StyledRootTextFieldController } from "./input-controller.styled";

interface InputControllerProps {
  control: Control<any>;
  name: string;
  onChange?: (value: string) => void;
  textFieldProps?: TextField.RootProps;
  renderInput?: (field: any) => React.ReactNode;
}

export const InputController = ({
  onChange,
  control,
  name,
  textFieldProps,
  renderInput,
}: InputControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Flex direction="column" gap="1">
          {renderInput ? (
            renderInput({
              ...field,
              onChange: (e: any) => {
                field.onChange(e);
                onChange?.(e?.target?.value || e);
              },
            })
          ) : (
            <StyledRootTextFieldController
              {...field}
              size="3"
              onChange={(e) => {
                field.onChange(e);
                onChange?.(e.target.value);
              }}
              {...textFieldProps}
            />
          )}
          {Boolean(error) && (
            <Text color="red" size="1">
              {error?.message}
            </Text>
          )}
        </Flex>
      )}
    />
  );
};
