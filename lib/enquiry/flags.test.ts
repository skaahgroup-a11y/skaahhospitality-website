import { describe, expect, it } from "vitest";
import { emailDomain, isVerifiedDomain, needsManualCheck } from "./flags";

describe("emailDomain", () => {
  it("extracts the domain", () => {
    expect(emailDomain("secretary@maha.gov.in")).toBe("maha.gov.in");
  });
  it("handles missing at sign", () => {
    expect(emailDomain("not-an-email")).toBe("");
  });
});

describe("isVerifiedDomain", () => {
  it("flags gov.in addresses", () => {
    expect(isVerifiedDomain("office@industries.gov.in")).toBe(true);
  });
  it("flags nic.in addresses", () => {
    expect(isVerifiedDomain("desk@nic.in")).toBe(true);
  });
  it("flags country gov domains", () => {
    expect(isVerifiedDomain("clerk@treasury.gov")).toBe(true);
    expect(isVerifiedDomain("visits@fco.gov.uk")).toBe(true);
  });
  it("flags Swiss federal addresses", () => {
    expect(isVerifiedDomain("protokoll@eda.admin.ch")).toBe(true);
  });
  it("flags embassy domains", () => {
    expect(isVerifiedDomain("visits@indembassybern.embassy.ch")).toBe(true);
  });
  it("does not flag ordinary corporate mail", () => {
    expect(isVerifiedDomain("events@company.com")).toBe(false);
  });
  it("does not flag free mail", () => {
    expect(isVerifiedDomain("someone@gmail.com")).toBe(false);
  });
});

describe("needsManualCheck", () => {
  it("flags free mail plus 61+ delegation with no organisation", () => {
    expect(
      needsManualCheck({
        email: "someone@gmail.com",
        organisation: "",
        segment: "delegation",
        details: { sizeBand: "61-plus" },
      }),
    ).toBe(true);
  });
  it("flags free mail plus 61+ delegation even with organisation", () => {
    expect(
      needsManualCheck({
        email: "someone@yahoo.com",
        organisation: "Some Office",
        segment: "delegation",
        details: { sizeBand: "61-plus" },
      }),
    ).toBe(true);
  });
  it("passes a normal delegation enquiry from official mail", () => {
    expect(
      needsManualCheck({
        email: "secretary@industries.gov.in",
        organisation: "State industrial development corporation",
        segment: "delegation",
        details: { sizeBand: "31-60" },
      }),
    ).toBe(false);
  });
  it("passes small enquiries from free mail", () => {
    expect(
      needsManualCheck({
        email: "someone@gmail.com",
        organisation: "",
        segment: "stay",
        details: {},
      }),
    ).toBe(false);
  });
});
