export default function Loading() {
  return (
    <div className="space-y-16 animate-pulse">
      <div className="text-center space-y-6 py-8">
        <div className="mx-auto h-6 w-32 rounded-full bg-muted" />
        <div className="mx-auto h-12 w-3/4 rounded-lg bg-muted" />
        <div className="mx-auto h-5 w-2/3 rounded bg-muted" />
        <div className="flex justify-center gap-3">
          <div className="h-10 w-36 rounded-lg bg-muted" />
          <div className="h-10 w-28 rounded-lg bg-muted" />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="h-40 rounded-xl bg-muted" />
        ))}
      </div>
    </div>
  );
}
