import React from "react";
import { OpenMicrofrontend } from "../../microfrontends/ErrorBoundary";

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const AssitantModule = React.lazy(() => import("@cactos_assistant/App"));

export default function AssistantModuleMF() {
  return (
    <OpenMicrofrontend name="AssistantModule">
      <AssitantModule />
    </OpenMicrofrontend>
  );
}
