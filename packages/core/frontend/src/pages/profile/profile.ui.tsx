import { ProfileNavigationButton } from "@/features/profile/profile-navigation-button/profile-navigation-button.ui";
import { ProfileLayout } from "@/shared/layouts/profile/profile.layout";
import { ProfileSettings } from "@/widgets/profile-settings/profile-settings.ui";

export const ProfilePage = () => {
  return (
    <ProfileLayout>
      <ProfileNavigationButton />
      <ProfileSettings />
    </ProfileLayout>
  );
};
