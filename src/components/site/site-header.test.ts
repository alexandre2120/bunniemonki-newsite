import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const headerPath = join(process.cwd(), "src/components/site/site-header.tsx");
const logoPath = join(process.cwd(), "public/brand/bunniemonki-logo.svg");

function readViewBox(svg: string) {
  const match = svg.match(/\bviewBox="([^"]+)"/);
  expect(match).not.toBeNull();

  return match![1].split(/\s+/).map(Number);
}

describe("SiteHeader logo", () => {
  test("uses the cropped SVG brand mark in the menu", () => {
    expect(existsSync(logoPath)).toBe(true);

    const source = readFileSync(headerPath, "utf8");
    expect(source).toContain('src="/brand/bunniemonki-logo.svg"');
    expect(source).toContain("width={526}");
    expect(source).toContain("height={100}");
    expect(source).not.toContain("mix-blend-multiply");

    const logo = readFileSync(logoPath, "utf8");
    const [, , width, height] = readViewBox(logo);

    expect(width / height).toBeGreaterThan(5);
    expect(height).toBeLessThan(520);
  });
});
