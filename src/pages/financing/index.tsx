import React from "react";
import { OpenMicrofrontend } from "../../microfrontends/ErrorBoundary";

// eslint-disable-next-line @typescript-eslint/no-unsafe-return
const FinancingModule = React.lazy(() => import("@cactos_financing/App"));

export default function FinancingModuleMF() {
  return (
    <OpenMicrofrontend name="FinancingModule">
      <FinancingModule />
    </OpenMicrofrontend>
  );
}
