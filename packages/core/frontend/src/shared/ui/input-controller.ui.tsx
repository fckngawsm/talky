import { Flex, Text, TextField } from "@radix-ui/themes";
import { Controller, type Control } from "react-hook-form";

interface InputControllerProps {
  control: Control<any>;
  name: string;
  placeholder: string;
  onChange?: (value: string) => void;
}

export const InputController = ({ placeholder, onChange, control, name }: InputControllerProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Flex direction="column" gap="1">
          <TextField.Root
            {...field}
            onChange={(e) => {
              field.onChange(e);
              onChange?.(e.target.value);
            }}
            placeholder={placeholder}
          />
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
