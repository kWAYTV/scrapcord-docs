import {
  AnimatedTitle,
  AnimatedDescription,
  AnimatedButton,
} from "@/app/(home)/components/landing";

export default function HomePage() {
  return (
    <main className="relative flex flex-1 items-center justify-center overflow-hidden bg-fd-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[size:32px_32px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-fd-background to-transparent" />

      {/* Content */}
      <div className="relative px-4 text-center max-w-sm sm:max-w-md md:max-w-lg">
        <AnimatedTitle />
        <AnimatedDescription />
        <AnimatedButton />
      </div>
    </main>
  );
}
