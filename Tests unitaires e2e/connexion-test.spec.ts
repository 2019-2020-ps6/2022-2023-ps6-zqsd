import { test, expect } from '@playwright/test';
import {connexionPage, homepage} from 'e2e/e2e.config';

test.describe('test the connexion system', () => {


  test("delete account LeonelG", async ({ page }) => {
    await page.goto(homepage);
    await page.locator("#header").getByText('Connexion').click();
    await page.locator("#connexion-name").fill("Admin");
    await page.locator("#connexion-password").fill("Admin");
    await page.getByRole('button', { name: "Connexion" }).click();
    await page.getByRole('button', { name: "Gestion des utilisateurs" }).click();

    const deleteButton = page
      .getByRole('listitem')
      .filter({ hasText: 'Prenom: LeonelNom: GomezStatus: userSupprimer' })
      .getByRole('button', { name: 'Supprimer' });

    if (await deleteButton.isVisible()) {
      await deleteButton.click();
      await page.getByRole('button', { name: 'Confirmer' }).click();
    } else {
      await page.goto(homepage); // Return to the homepage if the delete button is not visible
    }
  });


  //Alice veut inscrire son père en tant qu'utilisateur et tester le compte
    test("non existing user inscription",async ({page}) =>{
      await page.goto(homepage);
      await page.locator("#header").getByText('Connexion').click()
      await page.getByRole('button', { name: 'Inscription' }).click()
      await page.locator('#inscription-surname').fill("Leonel")
      await page.locator('#inscription-name').fill("Gomez")
      await page.locator("#inscription-id").fill("LeonelG")
      await page.locator('#inscription-password').fill("123456")
      await page.locator('#inscription-Rpassword').fill("123456")

      //afficher mdp et non
      await page.locator('#inscription-image-password-eye').click()
      await page.locator('#inscription-image-password-eye').click()

      await page.locator('#button-down-up-profile').click()
      await page.waitForTimeout(1000)
      await page.getByRole('button', { name: 'Utilisateur' }).click()
      await page.waitForTimeout(1000)
      expect (page.getByRole('button', { name: 'Utilisateur' })).toBeTruthy()
      await page.waitForTimeout(1000)
      await page.locator('#button-down-up-profile').click()
      //wait a bit
      await page.waitForTimeout(1000)
      await page.getByRole('button', { name: 'Inscription' }).click()
      //expect url to be connexion
      expect(page.url()).toBe(connexionPage);
      await page.locator("#header").getByText('Connexion').click()
      await page.locator("#connexion-name").fill("LeonelG")
      await page.locator("#connexion-password").fill("123456")
      await page.getByRole('button',({name:"Connexion"})).click()
      expect(page.url()).toBe(homepage);
      expect(page.getByText('Bienvenue Leonel')).toBeTruthy()
      await page.waitForTimeout(3000)
    })


  //identifiant incorrecte
  test("wrong identifiant",async ({page}) =>{
    await page.goto(homepage);
    await page.locator("#header").getByText('Connexion').click()
    await page.locator("#connexion-name").fill("JoelleB")
    await page.locator("#connexion-password").fill("1234567")
    await page.getByRole('button',({name:"Connexion"}))
    expect(page.getByText('Le mot de passe est incorrect')).toBeTruthy()
    await page.waitForTimeout(3000)
  })

  test ("mdp oublié",async ({page}) =>{
    await page.goto(homepage);
    await page.locator("#header").getByText('Connexion').click()
    await page.getByRole('button', { name: 'Mot de passe oublié ?' }).click()
    await page.locator('#forgetpassword-surname').fill("Joelle")
    await page.locator('#forgetpassword-name').fill("Bekhe")
    await page.locator('#forgetpassword-id').fill("JoelleB")
    await page.getByRole('button', { name: 'Confirmer' }).click()

    expect(page.getByText('Votre mot de passe est')).toBeTruthy()
    expect(page.getByText('123456')).toBeTruthy()
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Quitter' }).click()
    expect(page.url()).toBe(homepage);

  })


  //connexion de Joelle Boekhe et vérification de son statut
  test("existing user",async ({page}) =>{
    await page.goto(homepage);
    await page.locator("#header").getByText('Connexion').click()
    await page.locator("#connexion-name").fill("JoelleB")
    await page.locator("#connexion-password").fill("123456")
    await page.getByRole('button',({name:"Connexion"})).click()
    expect(page.url()).toBe(homepage);
    expect(page.getByText('Bienvenue Joelle')).toBeTruthy()
    await page.waitForTimeout(3000)
  })

})
