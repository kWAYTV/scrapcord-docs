import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-fd-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-fd-background to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute h-[50rem] w-[50rem] -top-32 left-1/2 -translate-x-1/2 bg-gradient-radial from-blue-500/20 to-transparent [--gradient-stop:25%] opacity-20" />
        <div className="absolute h-[50rem] w-[50rem] -top-32 left-1/2 -translate-x-1/2 bg-gradient-radial from-purple-500/20 to-transparent [--gradient-stop:25%] opacity-20 animate-pulse" />
        <div className="absolute h-[40rem] w-[40rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-conic from-slate-900/50 via-blue-500/20 to-slate-900/50 blur-3xl opacity-30 animate-slow-spin" />
      </div>

      {/* Content */}
      <div className="relative px-4 text-center max-w-sm sm:max-w-md md:max-w-lg">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight">
          scrap
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            cord
          </span>
        </h1>
        <p className="text-fd-muted-foreground text-base sm:text-lg md:text-xl max-w-xl mx-auto mb-8 md:mb-10">
          The ultimate Discord bot for managing your Rust servers
        </p>

        <Link
          href="/docs"
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white font-medium hover:scale-105 transition-all duration-300 backdrop-blur-sm"
        >
          Get Started
          <span className="text-lg">→</span>
        </Link>
      </div>
    </main>
  );
}
