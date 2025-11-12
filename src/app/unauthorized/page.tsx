export default function UnauthorizedPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-lamaPurpleLight">
      <div className="bg-white border border-lamaPurple p-10 rounded-md shadow-md max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">
          🚫 Access Denied
        </h1>
        <p className="text-lg text-gray-700">
          You are not authorized to view this page.
        </p>
      </div>
    </div>
  );
}
