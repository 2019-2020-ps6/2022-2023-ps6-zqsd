import { test, expect } from '@playwright/test';
import {connexionPage, homepage} from 'e2e/e2e.config';

test.describe('test the connexion system', () => {

    test("non existing user inscription",async ({page}) =>{
      await page.goto(homepage);
      await page.locator("#header").getByText('Connexion').click()
      await page.getByRole('button', { name: 'Inscription' }).click()
      await page.locator('#inscription-surname').fill("Romain")
      await page.locator('#inscription-name').fill("Tho")
      await page.locator("#inscription-id").fill("ThoRomain")
      await page.locator('#inscription-password').fill("123456")
      await page.locator('#inscription-Rpassword').fill("123456")

      //afficher mdp et non
      await page.locator('#inscription-image-password-eye').click()
      await page.locator('#inscription-image-password-eye').click()

      await page.locator('#button-down-up-profile').click()
      await page.getByRole('button', { name: 'Utilisateur' }).click()
      expect (page.getByRole('button', { name: 'Utilisateur' })).toBeTruthy()
      await page.locator('#button-down-up-profile').click()
      //wait a bit
      await page.waitForTimeout(1000)
      await page.getByRole('button', { name: 'Inscription' }).click()
      //expect url to be connexion
      expect(page.url()).toBe(connexionPage);

    })
    //connexion
    test("existing user",async ({page}) =>{
        await page.goto(homepage);
        await page.locator("#header").getByText('Connexion').click()
        await page.locator("#connexion-name").fill("frallo")
        await page.locator("#connexion-password").fill("ihm")
        await page.getByRole('button',({name:"Connexion"})).click()
        expect(page.url()).toBe(homepage);
    })

  //identifiant incorrecte
  test("wrong identifiant",async ({page}) =>{
    await page.goto(homepage);
    await page.locator("#header").getByText('Connexion').click()
    await page.locator("#connexion-name").fill("André")
    await page.locator("#connexion-password").fill("ABouchard")
    await page.getByRole('button',({name:"Connexion"}))
    expect(page.getByText('L\'identifiant n\'existe pas')).toBeTruthy()
  })

  test ("mdp oublié",async ({page}) =>{
    await page.goto(homepage);
    await page.locator("#header").getByText('Connexion').click()
    await page.getByRole('button', { name: 'Mot de passe oublié ?' }).click()
    await page.locator('#forgetpassword-name').fill("rallo")
    await page.locator('#forgetpassword-surname').fill("frederic")
    await page.locator('#forgetpassword-id').fill("frallo")
    await page.getByRole('button', { name: 'Confirmer' }).click()

    expect(page.getByText('Votre mot de passe est')).toBeTruthy()
    expect(page.getByText('ihm')).toBeTruthy()
    await page.getByRole('button', { name: 'Quitter' }).click()
    expect(page.url()).toBe(homepage);

  })

})
