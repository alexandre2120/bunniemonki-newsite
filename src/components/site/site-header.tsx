"use client";

import { ArrowUpRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { analyticsClickAttributes } from "@/lib/analytics";
import { getNavItems, siteCopy } from "@/lib/content";
import { getAlternateLocalePath, getLocalizedPath, type Locale } from "@/lib/i18n";

export function SiteHeader({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const navItems = getNavItems(locale);
  const pathname = usePathname();
  const alternate = getAlternateLocalePath(pathname);
  const altLocale = locale === "en" ? "PT" : "EN";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/92 backdrop-blur-md">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-3 focus:top-3 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        {copy.ui.skipToContent}
      </a>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link
          href={getLocalizedPath(locale, "home")}
          className="flex items-center gap-3"
          {...analyticsClickAttributes({
            name: "navigation_click",
            location: "header_logo",
            target: "home",
            locale,
            pageKind: "global",
          })}
        >
          <Image
            src="/brand/bunniemonki-logo.svg"
            width={526}
            height={100}
            alt="Bunniemonki"
            priority
            loading="eager"
            className="h-8 w-auto"
          />
          <span className="hidden border-l border-border pl-3 font-mono text-[11px] uppercase text-muted-foreground lg:inline">
            {copy.tagline}
          </span>
        </Link>

        <nav aria-label={copy.ui.primaryNav} className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" className="px-3">
              <Link
                href={item.href}
                {...analyticsClickAttributes({
                  name: "navigation_click",
                  location: "header_nav",
                  target: "primary_nav",
                  locale,
                  pageKind: "global",
                })}
              >
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" className="font-mono">
            <Link
              href={alternate}
              {...analyticsClickAttributes({
                name: "navigation_click",
                location: "header_locale_switcher",
                target: "alternate_locale",
                locale,
                pageKind: "global",
              })}
            >
              {altLocale}
            </Link>
          </Button>
          <Button asChild className="bg-brand text-brand-ink hover:bg-brand/85">
            <Link
              href={getLocalizedPath(locale, "scan")}
              {...analyticsClickAttributes({
                name: "cta_click",
                location: "header_desktop",
                target: "automation_scan",
                locale,
                pageKind: "global",
              })}
            >
              {copy.cta.scan}
              <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon-lg"
              className="lg:hidden"
              aria-label={copy.ui.openMenu}
              {...analyticsClickAttributes({
                name: "navigation_click",
                location: "mobile_header",
                target: "open_menu",
                locale,
                pageKind: "global",
              })}
            >
              <Menu aria-hidden="true" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[min(88vw,420px)] bg-background">
            <SheetHeader>
              <SheetTitle>Bunniemonki</SheetTitle>
              <SheetDescription>{copy.category}</SheetDescription>
            </SheetHeader>
            <nav aria-label={copy.ui.mobilePrimaryNav} className="grid gap-1 px-4">
              {navItems.map((item) => (
                <SheetClose asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="border-b border-border py-4 font-heading text-2xl font-semibold"
                    {...analyticsClickAttributes({
                      name: "navigation_click",
                      location: "mobile_nav",
                      target: "primary_nav",
                      locale,
                      pageKind: "global",
                    })}
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto grid gap-2 p-4">
              <SheetClose asChild>
                <Button asChild className="bg-brand text-brand-ink hover:bg-brand/85">
                  <Link
                    href={getLocalizedPath(locale, "scan")}
                    {...analyticsClickAttributes({
                      name: "cta_click",
                      location: "mobile_menu",
                      target: "automation_scan",
                      locale,
                      pageKind: "global",
                    })}
                  >
                    {copy.cta.scan}
                  </Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild variant="outline">
                  <Link
                    href={alternate}
                    {...analyticsClickAttributes({
                      name: "navigation_click",
                      location: "mobile_locale_switcher",
                      target: "alternate_locale",
                      locale,
                      pageKind: "global",
                    })}
                  >
                    {locale === "en" ? "Português" : "English"}
                  </Link>
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
