import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const proxyPath = join(process.cwd(), "src/proxy.ts");

describe("locale proxy", () => {
  test("defaults visitors from Portugal or Brazil to Portuguese", async () => {
    expect(existsSync(proxyPath)).toBe(true);

    const { proxy } = await import("./proxy");
    const { NextRequest } = await import("next/server");

    for (const country of ["PT", "BR"]) {
      const request = new NextRequest("https://bunniemonki.com/?from=geo", {
        headers: { "x-vercel-ip-country": country },
      });

      const response = proxy(request);

      expect(response.status).toBe(307);
      expect(response.headers.get("location")).toBe("https://bunniemonki.com/pt?from=geo");
    }
  });

  test("defaults visitors from other countries to English", async () => {
    expect(existsSync(proxyPath)).toBe(true);

    const { config, proxy } = await import("./proxy");
    const { NextRequest } = await import("next/server");
    const request = new NextRequest("https://bunniemonki.com/", {
      headers: { "x-vercel-ip-country": "US" },
    });

    const response = proxy(request);

    expect(response.status).toBe(307);
    expect(response.headers.get("location")).toBe("https://bunniemonki.com/en");
    expect(config.matcher).toBe("/");
  });
});
