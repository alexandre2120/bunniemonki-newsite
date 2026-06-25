import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "mb-4 font-mono text-xs font-semibold uppercase text-muted-foreground",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  body,
  className,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-heading text-3xl font-semibold leading-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {body ? <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">{body}</p> : null}
    </div>
  );
}

export function PageBand({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("border-t border-border py-16 md:py-24", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 md:px-8">{children}</div>
    </section>
  );
}
