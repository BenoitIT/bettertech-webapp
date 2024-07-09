
"use client"
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-grey-200 w-full h-[100vh] flex justify-center items-center p-auto">
      <div className="bg-white shadow-md py-[8vh] px-[2vw] rounded-md flex flex-col justify-center gap-3">
        <h2>{error.message}</h2>
        {!error.message.includes("access this page") ? (
          <button
            className="bg-green-700 p-2 text-white rounded text-sm"
            onClick={() => reset()}
          >
            Try again
          </button>
        ) : (
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="bg-green-700 p-2 text-white rounded text-sm"
          >
            Go Back home
          </button>
        )}
      </div>
    </div>
  );
}
