import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";
import { useNavigate } from "react-router-dom";

export const SessionConfirmPhoneHeader = () => {
  const navigate = useNavigate();
  return (
    <Flex justify="between" align="center" gap="35px">
      <IconButton variant="ghost" color="gray" size="4" onClick={() => navigate(-2)}>
        <ArrowLeftIcon width="24" height="24" />
      </IconButton>
      Код из СМС
    </Flex>
  );
};
