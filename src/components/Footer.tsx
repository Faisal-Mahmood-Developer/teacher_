import { GraduationCap } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
            <GraduationCap className="h-4 w-4" />
          </span>
          <span className="font-display text-foreground">Ayesha Liaqat</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {year} Ayesha Liaqat. Crafted with care in Lahore.
        </p>
      </div>
    </footer>
  );
}
