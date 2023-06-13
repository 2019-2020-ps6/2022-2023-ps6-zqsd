import { test, expect } from '@playwright/test';
import { homepage } from 'e2e/e2e.config';

test.describe('test the connexion', () => {
    test("existing user",async ({page}) =>{
        await page.goto(homepage);
        await page.locator("#header").getByText('Connexion').click()
        await page.locator("#connexion-name").fill("André")
        await page.locator("#connexion-password").fill("ABouchard")
        await page.getByRole('button',({name:"Connexion"}))
    })
})