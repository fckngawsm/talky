import { StyledIconButton } from "@/shared/ui/icon-button/icon-button.styled";
import { InputController } from "@/shared/ui/input-controller/input-controller.ui";
import { CameraIcon, PaperPlaneIcon } from "@radix-ui/react-icons";
import { useFormContext } from "react-hook-form";
import { StyledChatForm } from "./chat-selected.styled";

export const ChatSelectedForm = () => {
  const { control } = useFormContext();
  return (
    <StyledChatForm>
      <StyledIconButton>
        <CameraIcon />
      </StyledIconButton>
      <InputController
        fullWidth
        control={control}
        name="message"
        textFieldProps={{
          placeholder: "Сообщение",
        }}
      />
      <StyledIconButton>
        <PaperPlaneIcon />
      </StyledIconButton>
    </StyledChatForm>
  );
};
