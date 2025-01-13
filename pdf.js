import { resolve } from "node:path";
import playwright from "playwright";

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`file://${resolve("./resume.html")}`, {
    waitUntil: "networkidle",
  });
  // await page.emulateMedia({ media: "screen" });
  await page.pdf({ path: `resume.pdf`, format: "a4", printBackground: true });
  await browser.close();
  console.log("Generated resume.pdf");
})();
