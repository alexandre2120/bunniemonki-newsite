import { describe, expect, test } from "vitest";

import nextConfig from "./next.config";

describe("nextConfig", () => {
  test("allows the loopback host used by local preview links in development", () => {
    expect(nextConfig.allowedDevOrigins ?? []).toContain("127.0.0.1");
  });
});
