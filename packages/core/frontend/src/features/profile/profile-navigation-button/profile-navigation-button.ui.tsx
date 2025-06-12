import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { IconButton } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { ProfileNavigationWrapper } from "./profile-navigation-button.styled";

export const ProfileNavigationButton = () => {
  return (
    <ProfileNavigationWrapper>
      <IconButton>
        <Link to="/chat">
          <ArrowLeftIcon />
        </Link>
      </IconButton>
    </ProfileNavigationWrapper>
  );
};
