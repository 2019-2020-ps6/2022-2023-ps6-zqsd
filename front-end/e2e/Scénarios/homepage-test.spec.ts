import { test, expect } from '@playwright/test';
import {homepage, testURL} from 'e2e/e2e.config';

test.describe('Homepage test', () => {
  test('Basic test', async ({page}) => {
    await page.goto(homepage);
    // Let's try with something you don't have in your page.
    const pageTitle = await page.getByRole('heading', {name: 'AGreatHeadingNameYouDontHave'});
    // It should not be visible as you don't have it in your page.
    expect(pageTitle).not.toBeVisible();
    // Test case pass? Means the playwright setup is done! Congrats!
    });
    test('Test 1', async ({page}) => {
      await page.goto(homepage);
      await page.click('button.btn-jouer');
     //Vérifier que l'url est Gamepage'
      expect(page.url()).toBe(testURL+'/Gamepage');
    });
});
