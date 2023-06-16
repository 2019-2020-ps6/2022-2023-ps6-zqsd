import { test, expect } from '@playwright/test';
import { homepage,testURL } from 'e2e/e2e.config';
import { QuizzListComponent } from 'src/app/quizz-list/quizz-list.component';
import { ParameterService } from 'src/services/Parameter/ParameterService';



test('Tester la musique activée', async ({ page }) => {
  await page.goto(homepage);
  await page.click('button.btn-jouer');
  await page.waitForTimeout(2000);
  const element = await page.$('span:has-text("Paramètres")');
  if (element) {
    await element.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  const optionValue = 'Musique 4';
  await page.selectOption('select', optionValue);
  const element2 = await page.$('span:has-text("Retour")');
  if (element2) {
    await element2.click();
  } else {
    console.log("Le span contenant le texte Retour n'a pas été trouvé.");
  }
  await page.waitForTimeout(5000);
  /*const musicOn = await page.evaluate(() => {
    const parameterService = (window as any).ng.getService('ParameterService');
    return parameterService.getCurrentMusic();
  });
  console.log("musicOn : " + musicOn)
  expect(musicOn).toBe('true');*/
});

test('Tester la musique désactivée', async ({ page }) => {
  await page.goto(homepage);
  await page.click('button.btn-jouer');
  await page.waitForTimeout(2000);
  const element = await page.$('span:has-text("Paramètres")');
  if (element) {
    await element.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  const optionValue = 'Musique 4';
  await page.selectOption('select', optionValue);
  const image = await page.waitForSelector('img[src="assets/Parameter/Son_Enable.png"]');
 // Sélectionnez l'élément de l'image
  if (image) {
    await image.click(); // Cliquez sur l'image
  } else {
    console.log("L'image n'a pas été trouvée.");
  }
  await page.waitForTimeout(1000);
  const element2 = await page.$('span:has-text("Retour")');
  if (element2) {
    await element2.click();
  } else {
    console.log("Le span contenant le texte Retour n'a pas été trouvé.");
  }
  await page.waitForTimeout(5000);
  /*const musicOn = await page.evaluate(() => {
    const parameterService = (window as any).ng.getService('ParameterService');
    return parameterService.getCurrentMusic();
  });

  expect(musicOn).toBe(false);*/
});
test('Tester la police', async ({ page }) => {
  await page.goto(homepage);
  await page.click('button.btn-jouer');
  await page.waitForTimeout(2000);
  const element = await page.$('span:has-text("Paramètres")');
  if (element) {
    await element.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  await page.click('mat-slider');
  //on augmente 3 fois la police (plus le click d'avant donc 4)
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(1000);
  let fontSize;
  const texte = await page.$('span:has-text("Ceci est un texte pour tester la taille.")');
    fontSize = await texte?.evaluate((element) => {
      const styles = window.getComputedStyle(element);
      return styles.fontSize;
    });
  console.log("font : " + fontSize)
  expect(fontSize).toBe('28px');
});

