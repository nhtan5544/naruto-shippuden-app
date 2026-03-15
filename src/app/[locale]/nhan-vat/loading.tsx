export default function Loading() {
  return (
    <div className="space-y-10 animate-pulse">
      <div className="space-y-3">
        <div className="h-6 w-24 rounded-full bg-muted" />
        <div className="h-9 w-48 rounded-lg bg-muted" />
        <div className="h-4 w-2/3 rounded bg-muted" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-52 rounded-xl bg-muted" />
        ))}
      </div>
    </div>
  );
}
