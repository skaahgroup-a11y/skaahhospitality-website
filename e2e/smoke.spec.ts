import { test, expect } from "@playwright/test";

// Smoke coverage: home renders, navigation reaches a service page, the
// enquiry wizard opens a segment, and the health endpoint answers.
test("home renders with the hero headline", async ({ page }) => {
  await page.goto("/en");
  await expect(
    page.getByRole("heading", { level: 1, name: "Switzerland, handled." }),
  ).toBeVisible();
});

test("service page reachable and titled", async ({ page }) => {
  await page.goto("/en/services/government-delegations");
  await expect(
    page.getByRole("heading", { level: 1, name: /Delegations, handled/ }),
  ).toBeVisible();
});

test("enquiry wizard opens the delegation path", async ({ page }) => {
  await page.goto("/en/enquiry?segment=delegation");
  await expect(
    page.getByRole("heading", { name: "The visit" }),
  ).toBeVisible();
});

test("health endpoint answers", async ({ request }) => {
  const response = await request.get("/api/health");
  expect(response.ok()).toBeTruthy();
  expect((await response.json()).status).toBe("ok");
});
