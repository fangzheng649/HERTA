export default function Brand() {
  return (
    <div className="flex h-16 items-center border-b border-border px-3">
      <div className="flex items-center gap-2.5">
        <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent font-mono text-base font-bold text-primary-foreground shadow-[0_4px_14px_-2px] shadow-primary/40">
          H
        </div>
        <div>
          <div className="font-mono text-sm font-bold tracking-wider">
            HERTA<span className="text-accent">·</span>
          </div>
          <div className="text-[10px] text-muted-foreground tracking-wide">Protocol Generator</div>
        </div>
      </div>
    </div>
  );
}
