import "../shared/base/normalize.css";
// Base theme tokens
import "@radix-ui/themes/tokens/base.css";

// Include just the colors you use, for example `ruby`, `teal`, and `slate`.
// Remember to import the gray tint that matches your theme setting.
import "@radix-ui/themes/tokens/colors/ruby.css";
import "@radix-ui/themes/tokens/colors/slate.css";
import "@radix-ui/themes/tokens/colors/teal.css";

// Rest of the CSS
import "@radix-ui/themes/components.css";
import "@radix-ui/themes/utilities.css";

import { Theme } from "@radix-ui/themes";
import { type ReactNode } from "react";

interface RadixWrapperProps {
  children: ReactNode;
}

export const RadixWrapper = ({ children }: RadixWrapperProps) => {
  return (
    <Theme radius="medium" appearance="light" accentColor="iris" panelBackground="solid">
      {children}
    </Theme>
  );
};
