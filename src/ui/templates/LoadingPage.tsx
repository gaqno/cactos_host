export default function LoadingPage() {
  return (
    <div className="glass">
      <div className="flex h-screen items-center justify-center">
        <div className="mx-auto max-w-xl px-4 py-8 text-center">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      </div>
    </div>
  );
}