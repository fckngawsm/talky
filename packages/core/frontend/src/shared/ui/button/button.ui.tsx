import { Button, type ButtonProps } from "@radix-ui/themes";
import type { ReactNode } from "react";

interface BasedButtonProps {
  children: ReactNode;
  buttonProps: ButtonProps;
}

export const BasedButton = ({ children, buttonProps }: BasedButtonProps) => {
  return (
    <Button {...buttonProps} variant="outline">
      {children}
    </Button>
  );
};
