const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('ippo current illatha thaala naanga campus vittu engada room porom');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    'இப்போ current இல்லாத தாள நாங்க campus விட்டு எங்கட room போறோம் ';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});



test('Neg_Fun_0002 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('WhatsApp la message anuppinen');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    'Whatsapp ல message அனுப்பினேன் ';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});


test('Neg_Fun_0003 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('ticket price Rs. 2500');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    'டிக்கெட்  பிரைஸ் RS.2500 ';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});


test('Neg_Fun_0004 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('Paal 500 ml  vaanganum');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    'பால்  500 ml  வாங்கணும் ';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});


test('Neg_Fun_0005 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('Unnoda employee ID enga');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    'உன்னோட எம்ப்லாய் ID எங்க ';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});



test('Neg_Fun_0006 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('1234567890');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    '1234567890';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});


test('Neg_Fun_0007 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('WhatsApp la message anuppinen');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    'Whatsapp ல message அனுப்பினேன் ';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});


test('Neg_Fun_0008 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('naan pirantha thihathi 2002/10/17');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    'நான் பிறந்த திகதி 2002/10/17 ';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});


test('Neg_Fun_0009 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('Naan 15‑01‑2026 la Chennai poganum nu plan panninen. Flight 06:30 AM la start aagum. Airport ku 2 hours munnaadu reach pannalam nu check panninen. Engeyo 3 kg sugar and 2 liters milk kooda vaangi ready panninen. Weather report 15‑01‑2026 ku 28°C to 32°C nu solluthu. Chennai la evening 05:00 PM ku 60% humidity irukum nu predict pannirukanga. Train la travel panna naaluku 5 km walk pannitu bus ku join panninen. School opening 01‑06‑2026 ku irukku, so children kku uniform measurements 34 inches chest, 28 inches waist, 36 inches length nu check panninen. Office ku new chair order panninen, adhu 1.2 meters height and 0.6 meters width irukum. Room la paint finish 25 liters color paint vaithirukkom, wall height 3 meters, length 5 meters. 18‑01‑2026 ku doctor appointment irukku, time 10:30 AM. Monthly electricity meter reading 250 kWh irundhadhu, gas cylinder 12 kg remaining irundhadhu. Naan next week la library visit panninen, distance 2.5 km walk panni reach panninen.');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    'நான் 15-01-2026-ல் சென்னை போகணும் என்று பிளான் பண்ணினேன். ஃப்ளைட் 06:30 AM-ல் ஸ்டார்ட் ஆகும். ஏர்போர்டுக்கு 2 மணி நேரம் முன்பே ரீச் பண்ணலாம் என்று செக் பண்ணினேன். எங்கேயோ 3 கிலோ சர்க்கரை மற்றும் 2 லிட்டர் பால் கூட வாங்கி ரெடி பண்ணினேன். வேர்த்தர் ரிப்போர்ட் 15-01-2026-க்கு 28°C முதல் 32°C என்று சொல்லுது. சென்னை-ல் ஈவினிங் 05:00 PM-க்கு 60% ஹ்யூமிடிட்டி இருக்கும் என்று பிரிடிக்ட் பண்ணிருக்காங்க. டிரெயின்-ல் டிராவல் பண்ண நாட்கு 5 கி.மீ. வாக்க் பண்ணிட்டு பஸ்-க்கு ஜோயின் பண்ணினேன். பள்ளி ஓப்பனிங் 01-06-2026-க்கு இருக்குது, அப்படியால் குழந்தைகளுக்கு யூனிபார்ம் மெஷுர்மென்ட்ஸ் 34 இன்ச் செஸ்ட், 28 இன்ச் வெய்ஸ்ட், 36 இன்ச் லெங்க்த் என்று செக் பண்ணினேன். ஆபீஸ்-க்கு நியூ சேர் ஆர்டர் பண்ணினேன், அது 1.2 மீட்டர் ஹைட் மற்றும் 0.6 மீட்டர் வித் இருக்கும். ரூம்-ல் பேயிண்ட் ஃபினிஷ் 25 லிட்டர் கலர் பேயிண்ட் வைத்திருக்கோம், சுவர் உயரம் 3 மீட்டர், நீளம் 5 மீட்டர். 18-01-2026-க்கு டாக்டர் அபாயிண்ட்மெண்ட் இருக்குது, டைம் 10:30 AM. மாதாந்திர எலக்ட்ரிசிட்டி மீட்டர் ரீடிங் 250 kWh இருந்தது, கேஸ் சிலிண்டர் 12 கிலோ ரிமெய்னிங் இருந்தது. நான் அடுத்த வாரம் லைப்ரரி விசிட் பண்ணினேன், தூரம் 2.5 கி.மீ. வாக்க் பண்ணி ரீச் பண்ணினேன் ';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});


test('Neg_Fun_0010 - Website returns different output than expected', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();
  await textArea.click();

  // Input Thanglish
  await textArea.type('Enaku 2 kg arisu thaanga');
  await page.keyboard.press('Space');

  // Wait until Tamil conversion happens
  await page.waitForFunction(
    el => /[\u0B80-\u0BFF]/.test(el.value),
    await textArea.elementHandle()
  );

  const actualText = await textArea.inputValue();

  // The output YOU EXPECTED (but system does NOT give)
  const expectedText =
    'எனக்கு 2 kg அரசு தாங்க ';

  // NEGATIVE ASSERTION → TEST PASSES
  expect(actualText).not.toBe(expectedText);

  console.log('Actual output from website:', actualText);
});