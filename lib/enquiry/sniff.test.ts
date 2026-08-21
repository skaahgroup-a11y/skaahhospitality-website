import { describe, expect, it } from "vitest";
import { sniffAllowed } from "./sniff";

function bytes(...values: number[]): Uint8Array {
  const padded = [...values];
  while (padded.length < 8) padded.push(0);
  return new Uint8Array(padded);
}

describe("sniffAllowed", () => {
  it("accepts PDF", () => {
    expect(sniffAllowed(bytes(0x25, 0x50, 0x44, 0x46, 0x2d))).toBe(true);
  });
  it("accepts OpenXML office files (zip)", () => {
    expect(sniffAllowed(bytes(0x50, 0x4b, 0x03, 0x04))).toBe(true);
  });
  it("accepts legacy office files", () => {
    expect(sniffAllowed(bytes(0xd0, 0xcf, 0x11, 0xe0))).toBe(true);
  });
  it("accepts JPEG", () => {
    expect(sniffAllowed(bytes(0xff, 0xd8, 0xff, 0xe0))).toBe(true);
  });
  it("accepts PNG", () => {
    expect(sniffAllowed(bytes(0x89, 0x50, 0x4e, 0x47))).toBe(true);
  });
  it("accepts MP4 (ftyp at offset 4)", () => {
    expect(
      sniffAllowed(bytes(0x00, 0x00, 0x00, 0x18, 0x66, 0x74, 0x79, 0x70)),
    ).toBe(true);
  });
  it("rejects executables", () => {
    expect(sniffAllowed(bytes(0x4d, 0x5a, 0x90, 0x00))).toBe(false);
  });
  it("rejects scripts posing as documents", () => {
    const text = new TextEncoder().encode("#!/bin/sh\nrm -rf");
    expect(sniffAllowed(text)).toBe(false);
  });
  it("rejects tiny files", () => {
    expect(sniffAllowed(bytes(0x25))).toBe(false);
  });
});
