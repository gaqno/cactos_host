import { type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MfErrorFallback } from "./ErroFallback";

interface IErrorBoundaryProps {
  name: string;
  children: ReactNode;
}

export function OpenMicrofrontend({ children, name }: IErrorBoundaryProps) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ErrorBoundary fallbackRender={() => <MfErrorFallback errorOrigin={name} />}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
}
