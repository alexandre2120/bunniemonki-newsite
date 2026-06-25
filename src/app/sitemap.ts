import type { MetadataRoute } from "next";

import { getStaticRouteParams } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://bunniemonki.com";

  return getStaticRouteParams()
    .filter(({ segments }) => !segments?.includes("form-unavailable") && !segments?.includes("formulario-indisponivel"))
    .map(({ locale, segments }) => ({
      url: `${base}/${locale}${segments?.length ? `/${segments.join("/")}` : ""}`,
      lastModified: new Date("2026-06-23"),
      changeFrequency: "weekly",
      priority: segments?.length ? 0.7 : 1,
    }));
}
