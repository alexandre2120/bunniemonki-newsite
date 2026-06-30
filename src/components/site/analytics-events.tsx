"use client";

import { track } from "@vercel/analytics";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import {
  analyticsPropertiesFromElement,
  classifyAnalyticsPath,
  extractSafeSearchProperties,
  safeAnalyticsProperties,
} from "@/lib/analytics";

export function AnalyticsEvents() {
  const pathname = usePathname();

  useEffect(() => {
    track("page_context", {
      ...classifyAnalyticsPath(pathname),
      ...extractSafeSearchProperties(window.location.search),
    });
  }, [pathname]);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest("[data-analytics-event]");
      if (!(element instanceof HTMLElement)) return;

      const eventName = element.dataset.analyticsEvent;
      if (!eventName) return;

      track(eventName, {
        ...analyticsPropertiesFromElement(element, window.location.pathname),
        ...safeAnalyticsProperties({ eventType: "click" }),
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
