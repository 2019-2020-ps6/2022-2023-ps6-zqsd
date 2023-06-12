import { test, expect } from '@playwright/test';
import {homepage, testURL} from 'e2e/e2e.config';

test.describe('Homepage test', () => {
    test('Test 1', async ({page}) => {
      await page.goto(homepage);
      await page.click('button.btn-jouer');
     //Vérifier que l'url est Gamepage'
      expect(page.url()).toBe(testURL+'/Gamepage');
    });
});
