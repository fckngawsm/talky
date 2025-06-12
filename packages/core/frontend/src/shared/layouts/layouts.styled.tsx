import { Container, Section } from "@radix-ui/themes";
import styled from "styled-components";

export const MainLayoutWrapper = styled(Section)`
  overflow: hidden;
  min-height: 100vh;
`;

export const ChatLayoutWrapper = styled(Container)`
  .rt-ContainerInner {
    display: flex;
    max-width: 100%;
    width: 100%;
    height: 100vh;
  }
`;

export const ProfileLayoutWrapper = styled(Container)`
  .rt-ContainerInner {
    display: flex;
    max-width: 100%;
    width: 100%;
    height: 100vh;
    gap: 10px;
  }
`;

export const SessionLayoutWrapper = styled(Container)`
  .rt-ContainerInner {
    display: flex;
    max-width: 100%;
    width: 100%;
    height: 100vh;
  }
`;
