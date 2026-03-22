export default function UnauthorizedPage() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-4">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-lamaSky/20 blur-3xl" />
        <div className="absolute right-10 bottom-24 h-72 w-72 rounded-full bg-lamaYellow/25 blur-3xl" />
      </div>

      <div className="neo-panel-strong relative z-10 max-w-xl border border-black/10 p-10 text-center">
        <p className="neo-subtitle">Permission Required</p>
        <h1 className="neo-title mb-3 text-4xl font-semibold text-red-700">
          Access Denied
        </h1>
        <p className="text-lg text-gray-700">
          You are not authorized to view this page.
        </p>
      </div>
    </div>
  );
}
