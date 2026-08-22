import { describe, expect, it } from "vitest";
import { formatReference } from "./reference";

describe("formatReference", () => {
  it("formats SKH-YYYYMMDD-#### with zero padding", () => {
    const date = new Date(Date.UTC(2026, 7, 14));
    expect(formatReference(date, 42)).toBe("SKH-20260814-0042");
  });
  it("pads single digits", () => {
    const date = new Date(Date.UTC(2026, 0, 5));
    expect(formatReference(date, 1)).toBe("SKH-20260105-0001");
  });
  it("keeps four digits above 999", () => {
    const date = new Date(Date.UTC(2026, 11, 31));
    expect(formatReference(date, 1234)).toBe("SKH-20261231-1234");
  });
});
