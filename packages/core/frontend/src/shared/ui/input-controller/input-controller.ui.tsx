import { Flex, Text, TextField } from "@radix-ui/themes";
import {
  Controller,
  type Control,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
} from "react-hook-form";
import { StyledRootTextFieldController } from "./input-controller.styled";

interface InputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  fullWidth?: boolean;
  onChange?: (value: string) => void;
  textFieldProps?: TextField.RootProps;
  renderInput?: (field: ControllerRenderProps<T, FieldPath<T>>) => React.ReactNode;
}

export const InputController = <T extends FieldValues>({
  onChange,
  control,
  name,
  textFieldProps,
  renderInput,
  fullWidth = false,
}: InputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Flex direction="column" gap="1" style={{ width: fullWidth ? "100%" : undefined }}>
          {renderInput ? (
            renderInput({
              ...field,
              onChange: (e) => {
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
