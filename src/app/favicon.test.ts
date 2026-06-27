import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, test } from "vitest";

const iconPath = join(process.cwd(), "src/app/icon.svg");

function readViewBox(svg: string) {
  const match = svg.match(/\bviewBox="([^"]+)"/);
  expect(match).not.toBeNull();

  return match![1].split(/\s+/).map(Number);
}

describe("app favicon", () => {
  test("uses the supplied SVG with dead borders cropped out", () => {
    expect(existsSync(iconPath)).toBe(true);

    const svg = readFileSync(iconPath, "utf8");
    const [x, y, width, height] = readViewBox(svg);

    expect(svg).toContain("<svg");
    expect(x).toBeGreaterThan(900);
    expect(y).toBeGreaterThan(550);
    expect(width).toBeLessThan(700);
    expect(height).toBeLessThan(700);
    expect(width / height).toBeCloseTo(1, 2);
  });
});
