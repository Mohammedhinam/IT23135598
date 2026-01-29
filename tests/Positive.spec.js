const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('kaalai vanakkam');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('காலை வணக்கம் ');
});


test('Pos_Fun_0002 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('naan poai varugiren');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('நான் போய் வருகிறேன் ');
});


test('Pos_Fun_0003 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('enakku thanneer thara mudiyumaa?');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('எனக்கு தண்ணீர் தர முடியுமா? ');
});


test('Pos_Fun_0004 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('Munnadi vanthu utkaaru ');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('முன்னாடி வந்து உட்காரு ');
});


test('Pos_Fun_0005 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('enakku kaaichchal kaaranamaaha naan paadasaalaikku sellavillai');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1500);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('எனக்கு காய்ச்சல் காரணமாக நான் பாடசாலைக்கு செல்லவில்லை ');
});

test('Pos_Fun_0006 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('nee saappittal naan saappiduven');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('நீ சாப்பிட்டால் நான் சாப்பிடுவேன் ');
});


test('Pos_Fun_0007 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('nee athai sariyaaha seithaai');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('நீ அதை சரியாக செய்தாய் ');
});


test('Pos_Fun_0008 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('naan naalaikku kandy poven');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('நான் நாளைக்கு கண்டி போவேன் ');
});


test('Pos_Fun_0009 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('naan kinaththuku thanni vaakka poren');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('நான் கிணத்துக்கு தண்ணி வாக்க போறேன் ');
});


test('Pos_Fun_0010 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('enakku atha paththi edhuvum theriyathu');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('எனக்கு அத பத்தி எதுவும் தெரியாது ');
});

test('Pos_Fun_0011 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('Naan nalaiku vanthu solran');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('நான் நாளைக்கு வந்து சொல்றன் ');
});


test('Pos_Fun_0012 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('enakku velai irukku naan poren');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('எனக்கு வேலை இருக்கு நான் போறேன் ');
});


test('Pos_Fun_0013 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('Aiyo! Avan nalla paiyan');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('ஐயோ! அவன் நல்ல பையன் ');
});


test('Pos_Fun_0014 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('Naan saapida poren');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('நான் சாப்பிட போறேன் ');
});


test('Pos_Fun_0015 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('Avargal vanthaargal');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('அவர்கள் வந்தார்கள் ');
});


test('Pos_Fun_0016 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('sari naan seigiren');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('சரி நான் செய்கிறேன் ');
});


test('Pos_Fun_0017 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('ungaludaya suham eppadi?');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('உங்களுடைய சுகம் எப்படி? ');
});


test('Pos_Fun_0018 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('enakku konjam konjam therium');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('எனக்கு கொஞ்சம் கொஞ்சம் தெரியும் ');
});


test('Pos_Fun_0019 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('avalukkuellamtherium');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('அவளுக்குஎல்லாம்தெரியும் ');
});


test('Pos_Fun_0020 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('Netru nadanththa college aandu vizhaavil maanavargal peraasiriyargal matrum sirappa virundhinargal kalandhu kondu pala kalaachara nigazhchigalai rasiththu nigazhchiyin sirappai anaivarum paaraattinaargal');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(5000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('நேற்று நடந்த காலேஜ் ஆண்டு விழாவில் மாணவர்கள் பேராசிரியர்கள் மற்றும் சிறப்ப விருந்தினர்கள் கலந்து கொண்டு பல கலாச்சார நிகழ்ச்சிகளை ரசித்து நிகழ்ச்சியின் சிறப்பை அனைவரும் பாராட்டினார்கள் ');
});


test('Pos_Fun_0021 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('Enaku Abdul kalaam aiyavai mihavum pudikkum');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('எனக்கு அப்துல் கலாம் ஐயாவை மிகவும் புடிக்கும் ');
});


test('Pos_Fun_0022 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('vanakkam eppadi irukka?');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('வணக்கம் எப்படி இருக்க? ');
});


test('Pos_Fun_0023 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('dei seekiram vaa');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('டேய் சீக்கிரம் வா ');
});



test('Pos_Fun_0024 - Convert simple Thanglish word to Tamil', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');

  const textArea = page.locator('textarea').first();

  // Focus the textarea
  await textArea.click();

  // Type Thanglish
  await textArea.type('naan Chennai pogiren');

  // Press space
  await page.keyboard.press('Space');

  // Wait a bit for real-time conversion
  await page.waitForTimeout(1000);

  const updatedText = await textArea.inputValue();

  expect(updatedText).toContain('நான் சென்னை போகிறேன் ');
});