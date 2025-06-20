import { Button, type ButtonProps } from "@radix-ui/themes";
import type { ReactNode } from "react";

interface BasedButtonProps {
  children: ReactNode;
  buttonProps: ButtonProps;
}

export const BasedButton = ({ children, buttonProps }: BasedButtonProps) => {
  return (
    <Button
      style={{
        cursor: "pointer",
      }}
      type="submit"
      variant="outline"
      {...buttonProps}
    >
      {children}
    </Button>
  );
};
