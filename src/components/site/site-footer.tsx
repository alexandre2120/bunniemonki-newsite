import Image from "next/image";
import Link from "next/link";

import { getLocalizedPath, type Locale } from "@/lib/i18n";
import { getNavItems, legalEntity, siteCopy } from "@/lib/content";

export function SiteFooter({ locale }: { locale: Locale }) {
  const copy = siteCopy[locale];
  const navItems = getNavItems(locale);
  const policyItems = [
    { label: locale === "en" ? "Privacy" : "Privacidade", href: getLocalizedPath(locale, "privacy") },
    { label: locale === "en" ? "Terms" : "Termos", href: getLocalizedPath(locale, "terms") },
    { label: "Cookies", href: getLocalizedPath(locale, "cookies") },
    {
      label: locale === "en" ? "Accessibility" : "Acessibilidade",
      href: getLocalizedPath(locale, "accessibility"),
    },
  ];

  return (
    <footer className="border-t border-border bg-surface py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.35fr_1fr_1fr_1fr] md:px-8">
        <div>
          <Image
            src="/brand/bunniemonki-logo-cropped.png"
            width={430}
            height={90}
            alt="Bunniemonki"
            className="h-10 w-auto mix-blend-multiply"
          />
          <p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">{copy.footer.statement}</p>
          <p className="mt-6 font-mono text-xs uppercase text-muted-foreground">
            {copy.category}
          </p>
        </div>
        <FooterColumn title={copy.footer.explore} items={navItems.slice(0, 4)} />
        <FooterColumn
          title={copy.footer.company}
          items={[
            { label: copy.nav.about, href: getLocalizedPath(locale, "about") },
            { label: copy.cta.scan, href: getLocalizedPath(locale, "scan") },
          ]}
        />
        <FooterColumn title={copy.footer.policies} items={policyItems} />
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-border px-5 pt-6 text-xs leading-5 text-muted-foreground md:px-8">
        <p>{copy.footer.legalLine}</p>
        <p className="mt-2">
          {legalEntity.registeredName} · NIPC {legalEntity.nipc} · {legalEntity.legalForm}
        </p>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: Array<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h2 className="font-mono text-xs font-semibold uppercase text-muted-foreground">{title}</h2>
      <ul className="mt-4 grid gap-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-foreground hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
