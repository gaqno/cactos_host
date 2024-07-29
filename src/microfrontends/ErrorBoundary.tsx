import { type ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { MfErrorFallback } from "./ErroFallback";
import Loading from "./Loading";

interface IErrorBoundaryProps {
  name: string;
  children: ReactNode;
}

export function OpenMicrofrontend({ children, name }: IErrorBoundaryProps) {
  return (
    <Suspense fallback={<Loading />}>
      <ErrorBoundary fallbackRender={() => <MfErrorFallback errorOrigin={name} />}>
        {children}
      </ErrorBoundary>
    </Suspense>
  );
}
