import { test, expect } from '@playwright/test';
import { homepage,testURL } from 'e2e/e2e.config';
import { QuizzListComponent } from 'src/app/quizz-list/quizz-list.component';



test('Jouer le quiz astérix', async ({ page }) => {
  // Étape 1 : Accéder à la page de sélection des quiz
  await page.goto(homepage);
  await page.click('button.btn-liste');

  const quizName = 'Astérix';

  await page.$$eval('li.quizz-item', (listItems, name) => {
    for (const listItem of listItems) {
      const h2Element = listItem.querySelector('h2');
      if (h2Element && h2Element.textContent === name) {
        const button = listItem.querySelector('button');
        button?.click();
        break;
      }
    }
  }, quizName);

  // Étape 3 : Jouer toutes les questions du quiz
  let currentUrl = await page.url();
  let previousUrl = currentUrl;
  console.log(currentUrl);
  while (previousUrl === currentUrl) {
    // Vérifier si la question est affichée correctement
    // Sélectionner la première réponse pour chaque question
    const answer = await page.$('.answer-option:first-child app-GameAnswer');
    if (answer) {
      const button = await answer.$('button');
      if(button){
        await button.click();
      }
    } else {
      console.log("L'élément answer est null. Vérifiez le sélecteur utilisé ou attendez que l'élément soit présent dans la page.");
    }
    await page.waitForTimeout(2000);
    // Vérifier si le quiz est terminé
    currentUrl = await page.url();
  }

  // Étape 4 : Vérifier que le quiz a été terminé et affiche les résultats
  const paragraphText = await page.textContent('p');

  // Vérifier si le texte correspond à "2/3"
  expect(paragraphText).toBe('1/3');
});
