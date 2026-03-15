export default function Loading() {
  return (
    <div className="space-y-10 animate-pulse">
      <div className="space-y-3">
        <div className="h-6 w-24 rounded-full bg-muted" />
        <div className="h-9 w-48 rounded-lg bg-muted" />
        <div className="h-4 w-2/3 rounded bg-muted" />
      </div>
      <div className="flex gap-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-9 w-28 rounded-md bg-muted" />
        ))}
      </div>
      <div className="space-y-5">
        {Array.from({ length: 7 }).map((_, i) => (
          <div key={i} className="h-64 rounded-xl bg-muted" />
        ))}
      </div>
    </div>
  );
}
