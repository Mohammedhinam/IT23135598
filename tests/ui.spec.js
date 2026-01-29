const { test, expect } = require('@playwright/test');

test('Pos_UI_Fun_0001 - Convert Thanglish to Tamil on SPACE key press', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // UI validation
  await expect(textArea).toBeVisible();
  await expect(textArea).toBeEnabled();

  // Type Thanglish
  await textArea.click();
  await textArea.type('ippo enna nadakuthu');

  // Press SPACE (UI trigger)
  await page.keyboard.press('Space');

  // Wait until Tamil text appears in textarea
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const convertedText = await textArea.inputValue();

  console.log('Converted Output:', convertedText);

  // ASSERTION → TEST PASSES
  expect(convertedText).toMatch(/[\u0B80-\u0BFF]/);
});
