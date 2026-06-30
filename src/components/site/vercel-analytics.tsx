"use client";

import { Analytics } from "@vercel/analytics/next";
import type { BeforeSendEvent } from "@vercel/analytics/next";

import { redactAnalyticsEvent } from "@/lib/analytics";

export function VercelAnalytics() {
  return <Analytics beforeSend={(event: BeforeSendEvent) => redactAnalyticsEvent(event)} />;
}
