import { H } from "highlight.run";

H.init("ng2z12jg", {
  serviceName: "frontend-app",
  tracingOrigins: true,
  networkRecording: {
    enabled: true,
    recordHeadersAndBody: true,
  },
});

export const logError = (error: Error) => {
  H.consumeError(error);
};

export const identifyUser = (userId: string, userInfo?: Record<string, any>) => {
  H.identify(userId, userInfo);
};
