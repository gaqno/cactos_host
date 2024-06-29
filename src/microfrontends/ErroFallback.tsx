import { MESSAGES } from "@cactos_tools/Messages";

export function MfErrorFallback({ errorOrigin }: { errorOrigin: string }) {
  return (
    <div className="w-full mx-auto my-8">
      <div className="flex flex-col bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">{MESSAGES?.error_microfrontend}</strong>
        <span className="block sm:inline">{errorOrigin}</span>
      </div>

    </div>
  );
}
